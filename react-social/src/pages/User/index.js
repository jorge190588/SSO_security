import React, { Component } from 'react';
import './style.css';
import LoadingIndicator  from 'commons/LoadingIndicator';
import Title from 'components/Title';
import Table from 'components/Table';

class User extends Component {
      
    constructor(props) {
        super(props);
        this.state = {
          loading: false
        }
    }
  
    componentDidMount() {
        this.setState({loading: true });
        setTimeout(function(){ 
            this.setState({loading: false });
         }.bind(this), 1000);
    }
    
    render() {
        if (this.state.loading){
            return <LoadingIndicator></LoadingIndicator>
        }
       
        return (
            <div>
                 <Title title="Usuarios"/>
                 <Table></Table>
            </div>
        )
    }
}

export default User;