import React, { Component } from 'react';
import { hasPermission as userHasPermission} from 'services/User';
import { getFormActionByRolIdList } from 'services/FormAction';
import { createRolFormAction, deleteRolFormAction } from 'services/RolFormAction';
import LoadingIndicator  from 'commons/LoadingIndicator';
import NotAuthorized from 'commons/NotAuthorized';
import Title from 'components/Title';
import Table from 'components/Table';
//import New from './New/index';
//import Update from  './Update/index';
import Alert from 'react-s-alert';

class RolFormAction extends Component {
      
    constructor(props) {
        super(props);
        this.state = {
            controller: "rolFormAction",
            loading: true,
            authorized:false,
            cancel:false,
            add:false,
            rowData: [],
            data: [],
            header: [
                { title: 'ID', field: '[0]' },
                { title: 'Formulario', field: '[5]' },
                { title: 'Ruta de formulario', field: '[10]' },
                { title: 'Grupo de formulario', field: '[6]' },
                { title: 'Acción', field: '[7]' },
                { title: 'Ruta de acción', field: '[11]' },
                { title: 'Tiene Permiso ?', field: '[4]', type: 'boolean'  },
               
            ],
            backToRolPage: props.showList,
            customActions:[],
            rol_id: props.rowData.id
        }
        this.addRegister = this.addRegister.bind(this);       
        this.cancelRegister = this.cancelRegister.bind(this);
    }
  
    async addRegister(rowData){
        if (rowData[4]){
            Alert.warning("El acceso ya es permitido");
            return ;
        }

        this.setState({ loading: true   });
        try{
            const hasPermission = await userHasPermission(this.state.controller,'create');    
            if (hasPermission.error)    this.setState({ authorized: false,  loading: false  });
            else{
                const response = await createRolFormAction({"rol_id":this.state.rol_id,"form_action_id":rowData[0] });
                if (response.error)     Alert.error("Error !, intente de nuevo");
                else{
                    Alert.success("Registro guardado");
                    await this.showList();
                }
            }
        }catch(exception){
            Alert.error("Error !, intente de nuevo");
            this.setState({     authorized: true,   loading: false});
        }
    }
    
    async cancelRegister(rowData){
        if (!rowData[4]){
            Alert.warning("El acceso ya esta denegado");
            return ;
        }

        this.setState({ loading: true   });
        try{
            const hasPermission = await userHasPermission(this.state.controller,'delete');    
            if (hasPermission.error)    this.setState({ authorized: false,  loading: false  });
            else{
                const response = await deleteRolFormAction({"form_action_id":rowData[0],'rol_id': rowData[9]  });
                if (response.error)     Alert.error("Error !, intente de nuevo");
                else{
                    Alert.success("Registro eliminado");
                    await this.showList();
                }
                this.setState({ authorized: true,  loading: false  });
            }
        }catch(exception){
            Alert.error("Error !, intente de nuevo");
            this.setState({     authorized: true,   loading: false});
        }
    }

    async showList(){
        try{
            const hasPermission = await userHasPermission(this.state.controller,'list');    
            if (hasPermission.error)    this.setState({ authorized: false,  loading: false  });
            else{
                const response =  await getFormActionByRolIdList(this.state.rol_id);
                if (response.error){
                    Alert.error("Error !, intente de nuevo");
                    this.setState({
                        authorized: true,
                        loading: false,
                        data: [],
                      });
                }else{
                    this.setState({
                        authorized: true,
                        loading: false,
                        data: response.data,
                      });
                }
            }

        }catch(exception){
            Alert.error("Error !, intente de nuevo");
            this.setState({
                authorized: true,
                loading: false
            });
        }
    }

    componentDidMount() {
        var self =  this;
        this.state.customActions.push({
            icon: 'keyboard_backspace',
            tooltip: 'Regresar',
            isFreeAction: true,
            onClick: self.state.backToRolPage
        });
    
        this.state.customActions.push(function(rowData){ 
            return {
                icon: 'add',
                tooltip: 'Agregar',
                onClick: function() { self.addRegister(rowData); }
            }
        });
        this.showList();
    }
    
    render() {
        if (this.state.loading){ return <LoadingIndicator/> }
        if (!this.state.authorized){ return <NotAuthorized/> }
       
        return (
            <div>
                 <Title title="Acciones de roles"/>
                 <br/>
                 <Table pageSize={this.state.pageSize} header = {this.state.header} 
                        data={this.state.data} 
                        cancelRegister={this.cancelRegister} customActions={this.state.customActions}/>
            </div>
        )
    }
}

export default RolFormAction;