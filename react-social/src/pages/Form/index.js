import React, { Component } from 'react';
import { hasPermission as userHasPermission} from 'services/User';
import { getFormList, deleteForm } from 'services/Form';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Table from 'components/Table';
import New from './New/index';
import Update from  './Update/index';
import RolFormAction from 'pages/RolFormAction';
import Alert from 'react-s-alert';

class Form extends Component {     
    constructor(props) {
        super(props);
        this.state = {
            controller:'rol',
            loading: true,
            authorized:false,
            create:false,
            update:false,
            delete:false,
            formAccess:false,
            rowData: [],
            data: [],
            header: [
                { title: 'ID', field: 'id' },
                { title: 'Nombre', field: 'name' },
                { title: 'Grupo', field: 'formGroup.name' },
                { title: 'Icono', field: 'icon' },
                { title: 'Ruta', field: 'path' },
                { title: 'Mostrar en menú ?', field: 'showInMenu',type: 'boolean'  },
            ],
            customActions:[]
        }
        this.addRegister = this.addRegister.bind(this);
        this.updateRegister = this.updateRegister.bind(this);
        this.deleteRegister = this.deleteRegister.bind(this);
        this.showList = this.showList.bind(this);   
        this.formAccessRegister = this.formAccessRegister.bind(this);
    }
  
    async formAccessRegister(rowData){
        
        try{
            const hasPermission = await userHasPermission('formAction','listByRolId');    
            if (hasPermission.error){
                this.setState({
                    authorized: false,
                    loading: false,
                    create: false,
                    update: false,
                    delete:false,
                    formAccess:false,
                    rowData: rowData
                });
            }else{
                this.setState({
                    authorized: true,
                    loading: false,
                    create: false,
                    update: false,
                    delete:false,
                    formAccess:true,
                    rowData: rowData
                });
            }
        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ loading: false  });
        }
        
    }

    async addRegister(){
        this.setState({create:true,update:false, cancel:false, formAccess:false, view: false, delete: false, rowData: [] });
    }

    async updateRegister(rowData){
        this.setState({create:false,update:true, cancel:false, formAccess:false, view: false,delete: false,  rowData: rowData});
    }

    async deleteRegister(rowData){
        try{
            const hasPermission = await userHasPermission(this.state.controller,'delete');    
            if (hasPermission.error)   this.setState({ authorized: false,  loading: false  });
            else{
                const response = await deleteForm({'id':rowData.id});
                if (response.error)  {
                    if(response.error.code===301){
                        Alert.error("Error !, intente de nuevo "+response.error.message);
                        this.setState({ authorized: true,   loading: false  });
                    }else{
                        this.setState({ authorized: true,   loading: false });
                        Alert.error("Error !, "+response.error.message);                    
                    }
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
            const hasPermission = await userHasPermission(this.state.controller,'list');    
            if (hasPermission.error){
                this.setState({
                    authorized: false,
                    loading: false,
                    create: false,
                    update: false,
                    delete: false,
                    formAccess:false
                  });
            }else{
                const response =  await getFormList();
                this.setState({
                    authorized: true,
                    loading: false,
                    data: response.data,
                    create: false,
                    update: false,
                    delete: false,
                    formAccess:false
                  });
            }

        }catch(exception){
            (exception.status===404) ? Alert.error("Falla del sistema"): Alert.error("Intente de nuevo ");
            this.setState({ loading: false  });
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
        if (this.state.loading){ return <LoadingIndicator/> }
        if (!this.state.authorized){ return <NotAuthorized/> }
        if (this.state.create){ return <New showList={this.showList}/> }
        if (this.state.update){ return <Update rowData={this.state.rowData} showList={this.showList}/> }
        if (this.state.formAccess){ return <RolFormAction rowData={this.state.rowData} showList={this.showList}/> }

        return (
            <div>
                 <Title title="Formularios" />
                 <br/>
                 <Table pageSize={this.state.pageSize} header = {this.state.header} data={this.state.data} 
                        addRegister={this.addRegister} updateRegister={this.updateRegister} 
                        deleteRegister={this.deleteRegister} 
                        customActions={this.state.customActions}/>
            </div>
        )
    }
}

export default Form;