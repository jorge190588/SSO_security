import React, { Component } from 'react';
import Alert from 'react-s-alert';
import './App.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import {Template} from 'components';
import UserAccount from 'pages/Security/Login/FormElements/UserAccount';
import LoadingIndicator  from 'commons/LoadingIndicator';
import {connect } from "react-redux";
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated : false,
            loading: false,
            userAccount:new UserAccount(),
        }
        
    }

    async componentDidMount() {
        this.setState({ loading: true  });
        try{
            await this.state.userAccount.setCurrentUser();
            await this.state.userAccount.setMenu();
            if (this.state.userAccount.getIsError()){
                Alert.error(this.state.userAccount.getErrorMessage());
                this.setState({ loading: false  });
            }else{
                this.props.SET_MENU(this.state.userAccount.getMenu());
                this.props.SET_CURRENT_USER(this.state.userAccount.getCurrentUser());
                this.setState({authenticated:this.state.userAccount.getIsAuthenticated, loading:false});
            }
        }catch(error){
            this.setState({ loading: false, authenticated: false  });
        }
    }

    render() {
        if (this.state.loading) return (<LoadingIndicator/>);
        return (
            <div>
                <Template   authenticated={this.state.authenticated}  
                            menu = {this.state.menu}
                            currentUser = {this.state.currentUser}
                ></Template>
                <Alert      stack={{limit: 1}}   timeout = {3000}
                            position='top-right' effect='slide' offset={65} />
            </div>
       );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);