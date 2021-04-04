// @flow
import React, { Component, Fragment } from 'react';
import { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';


import { isUserEmailValid, isUserPasswordLengthValid } from '../../utils/validators';
import { checkAuthUserLogin, saveAuthUserLogin, saveAuthUserSignup } from '../../store/auth/auth.actions';
import { HttpCallStates } from '../../config/http.config';

import './signup.scss';
import { Button, Container, Grid, TextField, Typography} from "@material-ui/core";





const useStyles = (theme) => ({
    paper: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

type Props = {
    /**
     * Theme for the component. Default theme is consumed from styled components theme
     * */
    theme?: any,
    /**
     * Function to set the user login details when logging in
     * */
    saveAuthUserLogin: Function,
    /**
     * Function to set the user login details when signing up
     * */
    saveAuthUserSignup: Function,
    /**
     * Text for call status of saveAuthUserLogin call
     * */
    saveAuthUserLoginCallStatus: string,
    /**
     * Text for call status of saveAuthUserSignup call
     * */
    saveAuthUserSignupCallStatus: string,
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
    /**
     * Text for call status of checkAuthUser call
     * */
    checkAuthUserLoginCallStatus: string,
};

/**
 * Signup page for the app includes user name, email and password
 * @visibleName SignupPage
 * */
class SignupPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.recaptchRef = React.createRef();
    }

    googleApiLoadChecker = null;
    state = {
        signupForm: {
            full_name: '',
            email: '',
            password: '',
            recaptcha: '',
        },
        signupFormErrors: {
            full_name: '',
            email: '',
            password: '',
            recaptcha: '',
        },
    };

    /* istanbul ignore next */
    componentDidMount() {

    }

    /* istanbul ignore next */
    componentDidUpdate(prevProps) {
        console.log('sign up update', prevProps.saveAuthUserSignupCallStatus, this.props.saveAuthUserSignupCallStatus)
        if (prevProps.saveAuthUserSignupCallStatus === HttpCallStates.LOADING && this.props.saveAuthUserSignupCallStatus === HttpCallStates.SUCCESS) {
            // notification.info(
            //     <div>
            //         We have sent you a verification email. Please click on the link in the email.
            //         <br />
            //         <br />
            //         {/* eslint-disable-next-line react/no-unescaped-entities */}
            //         It may take up 5 minutes for you to receive the email. If still haven't received, check your Spam folder.
            //         <br />
            //         Still, no? Reach out to us.
            //     </div>,
            //     {
            //         title: 'Signup successful',
            //         autoClose: NotificationDuration.LONG,
            //     },
            // );
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                signupForm: {
                    full_name: '',
                    email: '',
                    password: '',
                    recaptcha: '',
                },
                signupFormErrors: {
                    full_name: '',
                    email: '',
                    password: '',
                    recaptcha: '',
                },
            });
            this.props.history.push('/login');
        }
        if (prevProps.saveAuthUserLoginCallStatus === HttpCallStates.LOADING && this.props.saveAuthUserLoginCallStatus === HttpCallStates.SUCCESS) {
            if (this.props.isUserLoggedIn) {
                this.navigateUser();
            }
        }
    }

    /* istanbul ignore next */
    renderGoogleLoginButton = () => {
        if (window.gapi) {
            window.gapi.signin2.render('google_signup_button', {
                scope: 'profile email',
                longtitle: true,
                theme: 'light',
                width: 190,
                height: 40,
                onsuccess: user => {
                    this.onGoogleLoginSuccess(user);
                },
                onfailure: error => {
                    console.error('Google Login Failed', error);
                },
            });
            if (this.googleApiLoadChecker) {
                clearInterval(this.googleApiLoadChecker);
            }
        }
    };

    handleSignupFormChange = (property, event) => {
        let value = '';
        const stateUpdates = {};
        let errorMessageUpdates = {};

        /*Persist the event here because React nullifies Synthetic Events when about to set state*/
        if (property === 'email' || property === 'password' || property === 'first_name' || property === 'last_name') {
            event.persist();
        }

        this.setState(prevState => {
            if (property === 'email' || property === 'first_name' || property === 'last_name') {
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

            if (property === 'recaptcha') {
                value = event;

                errorMessageUpdates = {
                    [property]: '',
                };
            }

            return {
                signupForm: {
                    ...prevState.signupForm,
                    [property]: value,
                },
                signupFormErrors: {
                    ...prevState.signupFormErrors,
                    ...errorMessageUpdates,
                },
                ...stateUpdates,
            };
        });
    };

    getSignupFormValidation = (property, value, options?) => {
        if (property === 'full_name') {
            const { error } = this.getFullNameValidation(value);
            if (options && options.setState) {
                this.setState(prevState => {
                    return {
                        signupFormErrors: {
                            ...prevState.signupFormErrors,
                            [property]: error,
                        },
                    };
                });
            }
            return error;
        }

        if (property === 'email') {
            const { error } = this.getLoginEmailValidation(value);
            if (options && options.setState) {
                this.setState(prevState => {
                    return {
                        signupFormErrors: {
                            ...prevState.signupFormErrors,
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
                        signupFormErrors: {
                            ...prevState.signupFormErrors,
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

        const fullName = this.getFullNameValidation(this.state.signupForm.full_name);
        const email = this.getLoginEmailValidation(this.state.signupForm.email);
        const password = this.getPasswordValidation(this.state.signupForm.password);
        const recaptcha = this.getRecaptchaValidation(this.state.signupForm.recaptcha);

        this.setState(prevState => {
            return {
                signupFormErrors: {
                    ...prevState.signupFormErrors,
                    full_name: fullName.error,
                    email: email.error,
                    password: password.error,
                    recaptcha: recaptcha.error,
                },
            };
        });

        return fullName.isValid && email.isValid && password.isValid && recaptcha.isValid;
    };

    getFullNameValidation = fullName => {
        let errorMessage = '';
        if (!fullName || !fullName.trim()) {
            errorMessage = 'Enter your name';
        }
        return {
            error: errorMessage,
            isValid: !errorMessage,
        };
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
        } else if (!isUserPasswordLengthValid(password)) {
            errorMessage = 'Enter a strong password with 8 or more characters';
        }

        return {
            error: errorMessage,
            isValid: !errorMessage,
        };
    };

    getRecaptchaValidation = recaptcha => {
        let errorMessage = '';
        if (!recaptcha) {
            errorMessage = 'You need to verify captcha';
        }

        return {
            error: errorMessage,
            isValid: !errorMessage,
        };
    };

    handleSignup = () => {
        // const isValid = this.getSignupFormValidation(null, this.state.signupForm);

        if (this.props.saveAuthUserSignup) {
            let data  = this.state.signupForm;
            data.origin = window.location.origin;
            if(data && data.email) {
                data.email = data.email.toLowerCase()
            }
            this.props.saveAuthUserSignup(data);

        }
    };

    handleLogin = (loginData?, options?) => {
        if (this.props.saveAuthUserLogin) {
            const data =
                loginData && options && options.isGoogleLogin
                    ? loginData
                    : {
                          email: this.state.signupForm.email,
                          password: this.state.signupForm.password,
                      };
            this.props.saveAuthUserLogin(data);
        }
    };

    /* istanbul ignore next */
    onGoogleLoginSuccess(user) {
        if (user.isSignedIn()) {
            const data = {
                google_id_token: user.getAuthResponse().id_token,
            };
            window.gapi.auth2
                .getAuthInstance()
                .disconnect()
                .then(() => {
                    window.gapi.auth2
                        .getAuthInstance()
                        .signOut()
                        .then(() => {
                            this.handleLogin(data, { isGoogleLogin: true });
                        });
                });
        }
    }

    navigateUser = () => {
        const { location, history } = this.props;

        const searchParams = new URLSearchParams(location.search);

        if (searchParams.has('continue')) {
            history.push(decodeURIComponent(searchParams.get('continue')));
        } else {
            history.push('/workspaces');
        }
    };

    handleSignupFormInputKeydown = event => {
        event.persist();

        if (event.key === 'Enter') {
            this.handleSignup();
        }
    };


    render() {

        const { theme, checkAuthUserLoginCallStatus, saveAuthUserSignupCallStatus } = this.props;
        const { signupForm, signupFormErrors } = this.state;
        const classes = this.props;


        return (
            <Fragment>
                <Helmet defer={false}>
                    <title>Sign Up - Deepen AI</title>
                    <meta
                        name="description"
                        content="AI Annotation tool for 3D and 2D bounding boxes, polygons, points, lanes. Supports instance and semantic segmentation."
                    />
                </Helmet>
                <Container component="main" maxWidth="xs" className="signup-container">
                    <CssBaseline />
                    <div className={classes.paper}>
                        {/*<Avatar className={classes.avatar}>*/}
                        {/*    <LockOutlinedIcon />*/}
                        {/*</Avatar>*/}
                        <Typography component="h1" variant="h5" className="signup-page-title">
                            Sign up
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        onChange={(e) => this.handleSignupFormChange('first_name', e)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        onChange={(e) => this.handleSignupFormChange('last_name', e)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={(e) => this.handleSignupFormChange('email', e)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={(e) => this.handleSignupFormChange('password', e)}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="sign-up-button"
                                onClick={() => this.handleSignup()}
                            >
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link to="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    {/*<Box mt={5}>*/}
                    {/*    <Copyright />*/}
                    {/*</Box>*/}
                </Container>
            </Fragment>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.auth.isUserLoggedIn,
        checkAuthUserLoginCallStatus: state.auth.checkAuthUserLoginCallStatus,
        saveAuthUserLoginCallStatus: state.auth.saveAuthUserLoginCallStatus,
        saveAuthUserSignupCallStatus: state.auth.saveAuthUserSignupCallStatus,
    };
};

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
    checkAuthUserLogin: () => dispatch(checkAuthUserLogin()),
    saveAuthUserLogin: data => dispatch(saveAuthUserLogin(data)),
    saveAuthUserSignup: data => dispatch(saveAuthUserSignup(data)),
});

export default withTheme(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(SignupPage),
);

export const __Signup = withStyles(useStyles)(SignupPage);
