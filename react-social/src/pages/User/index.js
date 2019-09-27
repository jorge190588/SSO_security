import React, { Component } from 'react';
import { hasPermission as userHasPermission, getUserList } from 'services/User';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Table from 'components/Table';
import New from './New/index';

class User extends Component {
      
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          authorized:false,
          create:false,
          data: [],
          header: [
            { title: 'ID', field: 'id' },
            { title: 'Nombre', field: 'name' },
            { title: 'Correo', field: 'email' },
            { title: 'Correo verificado', field: 'emailVerified', type: 'boolean' },
            {
              title: 'Rol',
              field: 'rol_id',
              lookup: { 1: 'Admin', 2: 'Usuario' },
            },
            { title: 'Imagen', field: 'imageUrl' },
          ]
        }
        this.addRegister = this.addRegister.bind(this);
        this.showList = this.showList.bind(this);
    }
  
    async addRegister(){
        this.setState({create: true});
    }

    async showList(){
        try{
            const hasPermission = await userHasPermission('user','list');    
            if (hasPermission.error){
                this.setState({
                    authorized: (hasPermission.error) ? false : true,
                    loading: false
                  });
            }else{
                const response =  await getUserList();
                this.setState({
                    authorized: true,
                    loading: false,
                    data: response.data,
                    create: false
                  });
            }

        }catch(exception){
            this.setState({
                authorized: false,
                loading: false
            });
        }
    }

    async componentDidMount() {
        this.showList();
    }
    
    render() {
        if (this.state.loading){ return <LoadingIndicator/> }
        if (!this.state.authorized){ return <NotAuthorized/> }
        if (this.state.create){ return <New showList={this.showList}/> }
        return (
            <div>
                 <Title title="Usuarios"/>
                 <br/>
                 <Table header = {this.state.header} data={this.state.data} addRegister={this.addRegister} />
            </div>
        )
    }
}

export default User;