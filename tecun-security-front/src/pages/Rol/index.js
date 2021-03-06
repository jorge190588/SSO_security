import React, { Component } from 'react';
import ApiServices from 'services/ApiServices';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Table from 'components/Table';
import New from './New/index';
import Update from  './Update/index';
import RolFormAction from 'pages/RolFormAction';
import Alert from 'react-s-alert';

class Rol extends Component {     
    constructor(props) {
        super(props);
        this.state = {
            controller:'rol',
            key: Math.random(),
            loading: true,
            authorized:false,
            checkAutorization:true,
            create:false,
            update:false,
            delete:false,
            formAccess:false,
            rowData: [],
            data: [],
            header: [
                { title: 'ID', field: 'id' },
                { title: 'Nombre', field: 'name' },
                { title: 'Es rol público predeterminado ?', field: 'isPublic', type:'boolean' },
            ],
            customActions:[],
            elements:   {
                name: {         idelement: "name", value:'', label: "Nombre del rol", pattern:"^[\\w_\\sÑñáéíóúÁÉÍÓÚ.-]{3,50}$", validators: ['required'], errorMessages:['Campo requiere un texto de 4 a 20 caracteres (Ejemplo: jorgesantos1)'], isError:false, elementType:'input' },
                isPublic: {     idelement: "isPublic", value:false, label: "Es rol público predeterminado ?", pattern:"^([\\w_\\s]){3,20}$", validators: ['required'], errorMessages:['Seleccione una opción'], isError:false, elementType:'checkbox' },
            }
        }
        this.addRegister = this.addRegister.bind(this);
        this.updateRegister = this.updateRegister.bind(this);
        this.deleteRegister = this.deleteRegister.bind(this);
        this.showList = this.showList.bind(this);   
        this.formAccessRegister = this.formAccessRegister.bind(this);
    }
  
    async formAccessRegister(rowData){
        try{
            this.setState({loading: true});
            const hasPermission = await ApiServices.userSecurity.hasPermission('rolFormAction','list');    
            if (hasPermission.error){
                this.setState({authorized: false,loading: false});
            }else{
                this.setState({authorized: true,loading: false,formAccess:true,rowData: rowData});
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ loading: false  });
        }
    }
    async addRegister(){ this.setState({create:true}); }
    async updateRegister(rowData){ this.setState({update:true, rowData: rowData});}

    async deleteRegister(rowData){
        try{
            this.setState({ loading: true });
            const hasPermission = await ApiServices.userSecurity.hasPermission(this.state.controller,'delete');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const response = await ApiServices[this.state.controller].deleteRegister({'id':rowData.id});
                if (response.error)  {
                    Alert.error( (response.error.code===301) ? "Intente de nuevo" : response.error.message);
                    this.setState({ authorized: true,   loading: false });
                }else{
                    Alert.success("Registro eliminado");
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
                this.setState({checkAutorization: false,authorized: false,loading: false,create: false,update: false,delete: false, formAccess:false});
            }else{
                this.setState({checkAutorization: false, authorized: true,loading: false,key: Math.random(),create: false,update: false,delete: false, formAccess:false});
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ loading: false,checkAutorization: false, formAccess:false  });
        }
    }

    async componentDidMount() {
        var self = this;
        this.state.customActions.push(function(rowData){ 
            return {
                icon: 'lock_open',
                tooltip: 'Permisos a formularios',
                onClick: function() { self.formAccessRegister(rowData); }
            }
        });      
        this.showList();
    }
    render() {
        if (this.state.checkAutorization ) return <LoadingIndicator/>
        if (!this.state.authorized &&  !this.state.loading){ return <NotAuthorized/>}
        if (this.state.create){ return <New     showList={this.showList} elements={this.state.elements} controller={this.state.controller}/> }
        if (this.state.update){ return <Update  showList={this.showList} elements={this.state.elements} controller={this.state.controller} rowData={this.state.rowData}/> }
        if (this.state.formAccess){ return <RolFormAction rowData={this.state.rowData} showList={this.showList}/> }

        return (
            <div >
                { this.state.loading ? <LoadingIndicator/> : '' }
                 <Title title="Roles de usuario"/>
                 <br/>
                 <Table key={this.state.key}
                        pageSize={this.state.pageSize} 
                        header = {this.state.header} 
                        data={this.state.data} 
                        addRegister={this.addRegister} 
                        updateRegister={this.updateRegister} 
                        deleteRegister={this.deleteRegister} 
                        customActions={this.state.customActions}
                        service={ ApiServices[this.state.controller] }
                />
            </div>
        )
    }
}

export default Rol;