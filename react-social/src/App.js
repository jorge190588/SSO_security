import React, { Component } from 'react';
import LoadingIndicator from './common/LoadingIndicator';
import { getCurrentUser, getUserProfile } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';
import Alert from 'react-s-alert';
import './App.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import Menu from './components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

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
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  handleLogin(){
    console.log('login in app');
    //this.loadCurrentlyLoggedInUser();
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    return (
    <div>
      <Menu authenticated={this.state.authenticated}  onLogout={this.handleLogout} onLogin={this.handleLogin}
            ></Menu>
      <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
    </div>
   );
  }
}

export default App;
