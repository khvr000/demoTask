// @flow
import React, { Component, Fragment } from 'react';
import { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

// import LoginIllustration from '../../assets/images/illustrations/login.svg';
import { isUserEmailValid } from '../../utils/validators';
import { checkAuthUserLogin, saveAuthUserLogin } from '../../store/auth/auth.actions';
import { HttpCallStates } from '../../config/http.config';

import './login.scss';


import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";
import {Link} from "react-router-dom";


type Props = {
    /**
     * Theme for the component. Default theme is consumed from styled components theme
     * */
    theme?: any,
    /**
     * Function to check the user login on load
     * */
    checkAuthUserLogin: Function,
    /**
     * Function to set the user login details when logging in
     * */
    saveAuthUserLogin: Function,
    /**
     * Text for call status of checkAuthUser call
     * */
    checkAuthUserLoginCallStatus: string,
    /**
     * Text for call status of saveAuthUserLogin call
     * */
    saveAuthUserLoginCallStatus: string,
    /**
     * React-router location object
     */
    location: Object,
    /**
     * React-router history object
     */
    history: Object,
    /**
     * Helps in navigating user to the users list page when 'true'
     */
    isUserLoggedIn: boolean,
    authService: any,
    authState: any,
};

/**
 * Login page for the app and mode to enter the forgot password flow
 * @visibleName LoginPage
 * */
class LoginPage extends Component<Props> {
    constructor(props) {
        super(props);

        this.googleSigninButtonRef = React.createRef();
    }

    googleApiLoadChecker = null;
    state = {
        loginForm: {
            email: '',
            password: '',
        },
        loginFormErrors: {
            email: '',
            password: '',
        },
    };

    /* istanbul ignore next */
    componentDidMount() {
        if (this.props.checkAuthUserLogin) {
            this.props.checkAuthUserLogin();
        }
    }

    /* istanbul ignore next */
    componentDidUpdate(prevProps) {
        console.log('Component updated', prevProps.saveAuthUserLoginCallStatus, this.props.saveAuthUserLoginCallStatus);
        // if (
        //     prevProps.checkAuthUserLoginCallStatus === HttpCallStates.LOADING &&
        //     (this.props.checkAuthUserLoginCallStatus === HttpCallStates.SUCCESS || this.props.checkAuthUserLoginCallStatus === HttpCallStates.ERROR)
        // ) {
        //     if (this.props.isUserLoggedIn) {
        //         this.navigateUser();
        //     }
        // }

        if (prevProps.saveAuthUserLoginCallStatus === HttpCallStates.LOADING && this.props.saveAuthUserLoginCallStatus === HttpCallStates.SUCCESS) {
            if (this.props.isUserLoggedIn) {
                this.navigateUser();
            }
        }
    }

    componentWillUnmount() {
        if (this.googleApiLoadChecker) {
            clearInterval(this.googleApiLoadChecker);
        }
    }

    handleLoginFormChange = (property, event) => {
        let value = '';
        const stateUpdates = {};
        let errorMessageUpdates = {};

        /*Persist the event here because React nullifies Synthetic Events when about to set state*/
        if (property === 'email' || property === 'password') {
            event.persist();
        }

        this.setState(prevState => {
            if (property === 'email') {
                value = event.target.value;

                errorMessageUpdates = {
                    [property]: '',
                };
            }

            if (property === 'password') {
                value = event.target.value;

                errorMessageUpdates = {
                    [property]: '',
                };
            }

            return {
                loginForm: {
                    ...prevState.loginForm,
                    [property]: value,
                },
                loginFormErrors: {
                    ...prevState.loginFormErrors,
                    ...errorMessageUpdates,
                },
                ...stateUpdates,
            };
        });
    };

    getLoginFormValidation = (property, value, options?) => {
        if (property === 'email') {
            const { error } = this.getLoginEmailValidation(value);
            if (options && options.setState) {
                this.setState(prevState => {
                    return {
                        loginFormErrors: {
                            ...prevState.loginFormErrors,
                            [property]: error,
                        },
                    };
                });
            }
            return error;
        }

        if (property === 'password') {
            const { error } = this.getPasswordValidation(value);
            if (options && options.setState) {
                this.setState(prevState => {
                    return {
                        loginFormErrors: {
                            ...prevState.loginFormErrors,
                            [property]: error,
                        },
                    };
                });
            }
            return error;
        }

        if (options && options.isGoogleLogin) {
            // return value && value.google_id_token;
            return true;
        }

        if (options && options.isOktaLogin) {
            // return value && value.google_id_token;
            return true;
        }

        const email = this.getLoginEmailValidation(this.state.loginForm.email);
        const password = this.getPasswordValidation(this.state.loginForm.password);

        this.setState(prevState => {
            return {
                loginFormErrors: {
                    ...prevState.loginFormErrors,
                    email: email.error,
                    password: password.error,
                },
            };
        });

        return email.isValid && password.isValid;
    };

    getLoginEmailValidation = email => {
        let errorMessage = '';
        if (!email || !email.trim()) {
            errorMessage = 'Enter an email';
        } else if (!isUserEmailValid(email)) {
            errorMessage = 'Enter a valid email address (eg. john.doe@deepen.ai)';
        }
        return {
            error: errorMessage,
            isValid: !errorMessage,
        };
    };

    getPasswordValidation = password => {
        let errorMessage = '';
        if (!password) {
            errorMessage = 'Enter a password';
        }

        return {
            error: errorMessage,
            isValid: !errorMessage,
        };
    };

    handleLogin = (loginData?, options?) => {
        const isValid = this.getLoginFormValidation(null, loginData, options);

        if (isValid && this.props.saveAuthUserLogin) {
            const data = this.state.loginForm;
            this.props.saveAuthUserLogin(data);
        }
    };

    navigateUser = () => {
        const { location, history } = this.props;

        const searchParams = new URLSearchParams(location.search);

        if (searchParams.has('continue')) {
            history.push(decodeURIComponent(searchParams.get('continue')));
        } else {
            history.push('/default');
        }
    };

    handleLoginFormInputKeydown = event => {
        event.persist();

        if (event.key === 'Enter') {
            this.handleLogin();
        }
    };

    handleLoginFormInputBlur = (property, value, options?) => {
        if (value && value.length) {
            this.getLoginFormValidation(property, value, options);
        }
    };

    render() {
        const { saveAuthUserLoginCallStatus } = this.props;
        const { loginForm, loginFormErrors } = this.state;

        return (
            <>
                <Helmet defer={false}>
                    <title>Login - Deepen AI</title>
                    <meta
                        name="description"
                        content="AI Annotation tool for 3D and 2D bounding boxes, polygons, points, lanes. Supports instance and semantic segmentation."
                    />
                </Helmet>
                <Grid container spacing={0} justify="center" direction="row" className="login-page-container">
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={2}
                            className="login-form"
                        >
                            <Paper
                                variant="elevation"
                                elevation={2}
                                className="login-background"
                            >
                                <Grid item>
                                    <Typography component="h1" variant="h5" className="login-page-title">
                                        Sign in
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <form onSubmit={() => {}}>
                                        <Grid container direction="column" spacing={2} className="login-form-wrapper">
                                            <Grid item>
                                                <TextField
                                                    type="email"
                                                    placeholder="Email"
                                                    fullWidth
                                                    name="username"
                                                    variant="outlined"
                                                    value={this.state.username}
                                                    onChange={(e) => this.handleLoginFormChange('email', e)}
                                                    required
                                                    autoFocus
                                                    onBlur={() => this.handleLoginFormInputBlur('email', loginForm.email, { setState: true })}
                                                />
                                            </Grid>
                                            {loginFormErrors && loginFormErrors.email ? <div className="login-form-error">{loginFormErrors.email}</div> : null}
                                            <Grid item>
                                                <TextField
                                                    type="password"
                                                    placeholder="Password"
                                                    fullWidth
                                                    name="password"
                                                    variant="outlined"
                                                    value={this.state.password}
                                                    onChange={(e) => this.handleLoginFormChange('password', e)}
                                                    required
                                                    onBlur={() => this.handleLoginFormInputBlur('password', loginForm.password, { setState: true })}
                                                />
                                            </Grid>
                                            {loginFormErrors && loginFormErrors.password ? <div className="login-form-error">{loginFormErrors.password}</div> : null}
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    className="button-block"
                                                    onClick={this.handleLogin}
                                                    style={{textTransform: 'none'}}
                                                >
                                                    {saveAuthUserLoginCallStatus === HttpCallStates.LOADING ? 'Logging in ': 'Log in'}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="flex-end">
                                            <Grid item>
                                                <Link to="/signup" variant="body1">
                                                    Dont have an account? Sign up
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

            </>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.auth.isUserLoggedIn,
        checkAuthUserLoginCallStatus: state.auth.checkAuthUserLoginCallStatus,
        saveAuthUserLoginCallStatus: state.auth.saveAuthUserLoginCallStatus,
    };
};

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
    checkAuthUserLogin: () => dispatch(checkAuthUserLogin()),
    saveAuthUserLogin: (data, isSSO) => dispatch(saveAuthUserLogin(data, isSSO)),
});

export default withTheme(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(LoginPage),
);

export const __LoginPage = withTheme(LoginPage);
