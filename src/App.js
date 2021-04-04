import './App.css';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {setAuthLoginRequiredModal} from "./store/auth/auth.actions";
import {ThemeProvider} from "styled-components";
import AppTheme from "./themes";
import LoginPage from "./pages/login/login.pages";
import SignupPage from "./pages/signup/signup.pages";
import HomeComponent from "./pages/homeComponent/homeComponent.pages";


type Props = {

}

function App(props: Props) {


  const PrivateRoute = ({ component: Component, ...rest }) => {
      const isUserLoggedIn = props.isUserLoggedIn;
      return (
          <Route {...rest} render={(props) => {
              return (
                  isUserLoggedIn === true
                      ? <Component {...props} />
                      : <Redirect to='/login' />
              )
          }
          } />
      )
  }

  return (
      <ThemeProvider theme={AppTheme.light}>
          <div className="App">
              <Switch>
                  <Redirect exact from="/" to="/login" />
                  <Route path={['/login', '/signup', '/forgot-password', '/verify-email', '/default']}>
                      {/*<DefaultPublicTemplate>*/}
                          <Switch>
                              <Route path="/login" component={LoginPage} />
                              <Route path="/signup" component={SignupPage} />
                              <PrivateRoute path="/default" component={HomeComponent} />

                          </Switch>
                      {/*</DefaultPublicTemplate>*/}
                  </Route>
              </Switch>


          </div>
      </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
    return {
        showLoginRequiredModal: state.auth.showLoginRequiredModal,
        isUserLoggedIn: state.auth.isUserLoggedIn,
    }
};

const mapDispatchToProps = (dispatch) => ({
    setAuthLoginRequiredModal: (showModal) => dispatch(setAuthLoginRequiredModal(showModal)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
