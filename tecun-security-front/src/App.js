import React, { Component } from 'react';
import { getCurrentUser, getUserMenu } from 'services/User';
import { ACCESS_TOKEN } from './constants';
import Alert from 'react-s-alert';
import './App.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import {Template} from 'components';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  async handleLogin(){
    try{
      const currentUser = await getCurrentUser();
      const menuResponse = await getUserMenu();
      this.setState({
        authenticated: true,
        currentUser: currentUser,
        menu:JSON.parse(menuResponse.data)
      });
    }catch(exception){
      this.setState({
        authenticated: false,
        currentUser: null,
        menu:null
      });
    }
    

  }

  async componentDidMount() {
    this.handleLogin();
  }


  render() {
    if (this.state===undefined || this.state===null){
      return <div></div>
    }
    return (
      <div>
        <Template authenticated={this.state.authenticated}  
              onLogout={this.handleLogout} 
              onLogin={this.handleLogin}
              menu = {this.state.menu}
              currentUser = {this.state.currentUser}
              ></Template>
        <Alert stack={{limit: 1}} 
            timeout = {3000}
            position='top-right' effect='slide' offset={65} />
      </div>
  
   );
  }
}

export default App;
