import React, { Component } from 'react';
import { getCurrentUser, getUserMenu, setMenuFormat } from 'services/User';
import { ACCESS_TOKEN } from './constants';
import Alert from 'react-s-alert';
import './App.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import {Template} from 'components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      menu: null
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  setMenu(){
    getUserMenu()
    .then(response =>{
      this.setState({menu: setMenuFormat(response.data) });
    }).catch(error=>{
      this.setState({menu:[]});
    });
  }
  
  loadCurrentlyLoggedInUser() {
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true
      });
      this.setMenu();
    }).catch(error => {
      this.setState({
        currentUser: [],
        authenticated: false,
        menu: []
      });
    });    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
      menu:[] 
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
      <Template authenticated={this.state.authenticated}  
            onLogout={this.handleLogout} 
            onLogin={this.handleLogin}
            menu = {this.state.menu}
            ></Template>
      <Alert stack={{limit: 1}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
    </div>
   );
  }
}

export default App;
