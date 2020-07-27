import React, { Component } from 'react';
import ApiServices from 'services/ApiServices';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Table from 'components/Table';
import New from './New/index';
import Update from  './Update/index';
import ChangePassword from  './ChangePassword/index';
import Alert from 'react-s-alert';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            authorized:false,
            checkAutorization:true,
            create:false,
            update:false,
            changePassword:false,
            rowData: [],
            data: [],
            customActions:[],
            controller:'user',
            key: Math.random(),
            header: [
                { title: 'ID', field: 'id' },
                { title: 'Código', field: 'code' },
                { title: 'Nombre', field: 'name' },
                { title: 'Correo', field: 'email' },
                { title: 'Esta activo ?', field: 'isActive', type: 'boolean' },
                { title: 'Correo verificado', field: 'emailVerified', type: 'boolean' },
                { title: 'Rol',   field: 'rol.name',    },
                { title: 'Empresa',   field: 'company.name',    },
                { title: 'Imagen', field: 'imageUrl' },
            ]
        }
        this.addRegister = this.addRegister.bind(this);
        this.updateRegister = this.updateRegister.bind(this);
        this.changePasswordRegister = this.changePasswordRegister.bind(this);
        this.showList = this.showList.bind(this);
        this.enableRegister =  this.enableRegister.bind(this);
        this.disableRegister =  this.disableRegister.bind(this);
    }
  
    async addRegister(){ this.setState({create:true}); }
    async updateRegister(rowData){ this.setState({update:true, rowData: rowData}); }
    async changePasswordRegister(rowData){  this.setState({changePassword: true, rowData: rowData});}
    
    async enableRegister(rowData){
        if (rowData.isActive){
            Alert.error("El registro esta habilitado");                    
            return;
        }
            
        try{
            this.setState({ loading: true });
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'enable');
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const response = await ApiServices[this.state.controller].enableRegister({'id':rowData.id});
                if (response.error)  {
                    Alert.error( (response.error.code===301) ? "Intente de nuevo" : response.error.message);
                    this.setState({ authorized: true,   loading: false });
                }else{
                    Alert.success("Registro habilitado");
                    await this.showList();
                }
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ loading: false  });
        }
    }

    async disableRegister(rowData){
        if (!rowData.isActive){
            Alert.error("El registro esta deshabilitado");                    
            return;
        }   
        
        try{
            this.setState({ loading: true });
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'disable');
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const response = await ApiServices[this.state.controller].disableRegister({'id':rowData.id});
                if (response.error)  {
                    Alert.error( (response.error.code===301) ? "Intente de nuevo" : response.error.message);
                    this.setState({ authorized: true,   loading: false });
                }else{
                    Alert.success("Registro deshabilitado");
                    await this.showList();
                }
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ loading: false  });
        }
    }

    async showList(){
        try{
            this.setState({loading: true});
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'list');    
            if (hasPermission.error){
                this.setState({checkAutorization: false,authorized: false,loading: false,create: false,update: false,delete: false, changePassword:false});
            }else{
                this.setState({checkAutorization: false, authorized: true,loading: false,key: Math.random() ,create: false,update: false,delete: false, changePassword:false});
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({checkAutorization: false, authorized: true,loading: false,data: [],create: false,update: false,delete: false, changePassword:false});
        }
    }

    async componentDidMount() {
        let self = this;
        this.state.customActions.push(function(rowData){ 
            return {
                icon: 'vpn_key',
                tooltip: 'Cambiar clave',
                onClick: function() {    self.changePasswordRegister(rowData); }
            }
        }); 
        this.showList();
    }
    
    render() {
        if (this.state.checkAutorization ) return <LoadingIndicator/>
        if (!this.state.authorized &&  !this.state.loading){ return <NotAuthorized/>}
        if (this.state.create){ return <New     showList={this.showList} elements={this.state.elements} controller={this.state.controller}/> }
        if (this.state.update){ return <Update  showList={this.showList} elements={this.state.elements} controller={this.state.controller} rowData={this.state.rowData}/> }
        if (this.state.changePassword){ return <ChangePassword  showList={this.showList} controller={this.state.controller} rowData={this.state.rowData}/> }
        
        return (
            <div>
                { this.state.loading ? <LoadingIndicator/> : '' }
                 <Title title="Usuarios"/>
                 <br/>
                 <Table key={this.state.key}
                        pageSize={this.state.pageSize} 
                        header = {this.state.header} 
                        data={this.state.data} 
                        addRegister={this.addRegister} 
                        updateRegister={this.updateRegister} 
                        enableRegister={this.enableRegister} 
                        disableRegister={this.disableRegister} 
                        customActions={this.state.customActions}
                        service={ ApiServices[this.state.controller] }
                />
            </div>
        )
    }
}

export default User;