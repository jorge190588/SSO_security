import React, { Component } from 'react';
import { getCurrentUser, getUserProfile } from 'services/Api';
import { ACCESS_TOKEN } from './constants';
import Alert from 'react-s-alert';
import './App.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import {Menu} from 'components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    
    getUserProfile()
    .then(response=>{
      console.log(response);
    })
    .catch(error=>{
      console.log(error);
    });

    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true
      });
    }).catch(error => {
      this.setState({
      });
    });    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("Sesión cerrada!");
  }

  handleLogin(){
    this.loadCurrentlyLoggedInUser();
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    return (
    <div>
      <Menu authenticated={this.state.authenticated}  onLogout={this.handleLogout} onLogin={this.handleLogin}
            ></Menu>
      <Alert stack={{limit: 1}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
    </div>
   );
  }
}

export default App;
