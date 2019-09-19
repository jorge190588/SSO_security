import React, { Component } from 'react';
import './style.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../../constants';
import { login, getUserMenu } from 'services/User';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../../../img/fb-logo.png';
import googleLogo from '../../../img/google-logo.png';
import githubLogo from '../../../img/github-logo.png';
import Alert from 'react-s-alert';

class Login extends Component {
    constructor(props) {
        super(props);
    }
 
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
     
    render() {
        
        if(this.props.authenticated) { 
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;           
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Iniciar sesión</h1>
                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">o</span>
                    </div>
                    <LoginForm {...this.props} onLogin={this.props.onLogin}/>
                    <span className="signup-link">Nuevo usuario ?  <Link to="/signup">Registrarse</Link></span>
                </div>
            </div>
        );
    }
}

class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Registro con Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Registro con Facebook</a>
                <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                    <img src={githubLogo} alt="Github" /> Registro con Github</a>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repassword:'',
            authenticated: props.authenticated,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getMenu = this.getMenu.bind(this);
        this.onLogin = props.onLogin;
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    getMenu(){
        return new Promise(function(resolve) {
            getUserMenu(function(){     resolve();  }) 
        });
    }
 
    handleSubmit(event) {
        event.preventDefault();   

        const loginRequest = Object.assign({}, this.state);
        
        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("Registro exitoso!");
            this.getMenu().then(()=>{
                this.onLogin();
            }).catch();                

        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! algo esta mal. Por favor intenta de nuevo!');
        });
    }
    
    render() {
        if(this.state.authenticated) { 
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;           
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="email" name="email" 
                        className="form-control" placeholder="Ingrese su correo electrónico"
                        value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password" 
                        className="form-control" placeholder="Ingrese su clave"
                        value={this.state.password} onChange={this.handleInputChange} required/>  
                </div>
                
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary">Registrar</button>
                </div>
            </form>                    
        );
    }
}

export default Login
