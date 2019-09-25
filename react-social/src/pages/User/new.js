import React, { Component } from 'react';
import './style.css';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import { Link } from 'react-router-dom';
import { hasPermission as userHasPermission } from 'services/User';
import { tsThisType } from '@babel/types';

class New extends Component {
      
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
          loading: true,
          authorized:false,
          back: props.showList
        }
        this.saveRegister = this.saveRegister.bind(this);
        this.showList = this.showList.bind(this);
    }
  
    saveRegister(event, rowData){
        console.log(rowData);
    }

    showList(){
        console.log('show list');
        this.state.back();
    }

    async componentDidMount() {
        try{
            const hasPermission = await userHasPermission('user','create');    
            this.setState({
              authorized: (hasPermission.error) ? false : true,
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
                <Title title="Nuevo usuario"/>
                <button className="go-back-btn btn btn-primary" type="button" onClick={this.showList}>Regresar</button>
            </div>
        )
    }
}

export default New;