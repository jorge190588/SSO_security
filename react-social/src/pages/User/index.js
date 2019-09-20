import React, { Component } from 'react';
import './style.css';
import { getUserView } from 'services/User';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Table from 'components/Table';

class User extends Component {
      
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          authorized:false
        }
    }
  
    async componentDidMount() {
        try{
            const userView = await getUserView();
            
            this.setState({
              authorized: (userView.error) ? false : true,
              loading: false
            });
        }catch(exception){
            this.setState({
                authorized: false,
                loading: false
            });
        }
    }
    
    render() {
        if (this.state.loading){
            return <LoadingIndicator/>
        }

        if (!this.state.authorized){
            return <NotAuthorized/>
        }
       
        return (
            <div>
                 <Title title="Usuarios"/>
                 <br/>
                 <Table/>
            </div>
        )
    }
}

export default User;