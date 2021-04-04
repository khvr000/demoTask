import * as React from 'react';
import {withTheme} from "styled-components";
import {connect} from "react-redux";
import {saveAuthUserLogin, saveAuthUserLogout} from "../../store/auth/auth.actions";
import {getHomeComponentInfo} from "../../store/home/home.actions";
import "./homeComponent.scss";
import {Button} from "@material-ui/core";
import {HttpCallStates} from "../../config/http.config";

type Props = {
    getHomeComponentInfo: Function,
    saveAuthUserLogout: Function,
}

class HomeComponent extends React.Component<Props> {

    componentDidMount() {
        console.log('component mounted')
        if (this.props.getHomeComponentInfo) {
            this.props.getHomeComponentInfo();
        }
    }

    handleLogout = () => {
        // sessionStorage.clear();
        localStorage.clear();
        if (this.props.saveAuthUserLogout) {
            this.props.saveAuthUserLogout()
        }
        this.props.history.push('/');
    }

    render() {
        const { homeData, getHomeComponentInfoCallStatus } = this.props;
        console.log('getHomeComponentInfoCallStatus', getHomeComponentInfoCallStatus);
        return (
            <div className="home-component-container">

                {getHomeComponentInfoCallStatus === HttpCallStates.LOADING ? (
                        <div className="loader-container">
                            Loading data ..
                        </div>
                ) : (
                    <>
                        <div className="menu-wrapper">
                            <div className="menu-left" />
                            <div className="menu-right">
                                <Button
                                    color="secondary"
                                    type={"button"}
                                    onClick={() => this.handleLogout()}
                                >Logout</Button>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            {homeData && Object.keys(homeData)?.map(key => (
                                <div key={key}>{key}</div>
                            ))}
                        </div>
                    </>
                )}



            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        homeData: state.home.homeData,
        getHomeComponentInfoCallStatus: state.home.getHomeComponentInfoCallStatus
    };
};

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
    saveAuthUserLogin: (data, isSSO) => dispatch(saveAuthUserLogin(data, isSSO)),
    getHomeComponentInfo: (...args) => dispatch(getHomeComponentInfo(...args)),
    saveAuthUserLogout: (...args) => dispatch(saveAuthUserLogout(...args))
});

export default withTheme(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(HomeComponent),
);
