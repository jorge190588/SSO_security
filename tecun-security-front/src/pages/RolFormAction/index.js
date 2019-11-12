import React, { Component } from 'react';
import { hasPermission as userHasPermission} from 'services/User';
import { createRolFormAction, deleteRolFormAction, getRolFormActionListByRolId } from 'services/RolFormAction';
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
                { title: 'ID', field: 'formAction_id' },
                { title: 'Formulario', field: 'form' },
                { title: 'Ruta de formulario', field: 'formPath' },
                { title: 'Grupo de formulario', field: 'formGroup' },
                { title: 'Acción', field: 'action' },
                { title: 'Ruta de acción', field: 'actionPath' },
                { title: 'Sistema', field: 'system' },
                { title: 'Tiene Permiso ?', field: 'isTheRol', type: 'boolean'  },
            ],
            backToRolPage: props.showList,
            customActions:[],
            rol_id: props.rowData.id
        }
        this.addRegister = this.addRegister.bind(this);       
        this.cancelRegister = this.cancelRegister.bind(this);
    }
  
    async addRegister(rowData){
        if (rowData.isTheRol){
            Alert.warning("El acceso ya es permitido");
            return ;
        }

        this.setState({ loading: true   });
        try{
            const hasPermission = await userHasPermission(this.state.controller,'create');    
            if (hasPermission.error)    this.setState({ authorized: false,  loading: false  });
            else{
                const response = await createRolFormAction({"rol_id":this.state.rol_id,"form_action_id":rowData.formAction_id });
                if (response.error) {
                    Alert.error("Error !, intente de nuevo");
                    this.setState({loading: false});
                }else{
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
        if (!rowData.isTheRol){
            Alert.warning("El acceso ya esta denegado");
            return ;
        }

        this.setState({ loading: true   });
        try{
            const hasPermission = await userHasPermission(this.state.controller,'delete');    
            if (hasPermission.error)    this.setState({ authorized: false,  loading: false  });
            else{
                const response = await deleteRolFormAction({"form_action_id":rowData.formAction_id,'rol_id': rowData.rolId  });
                if (response.error)     Alert.error("Error !, "+ response.error.message);
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
                const response =  await getRolFormActionListByRolId(this.state.rol_id);
                if (response.error){
                    Alert.error("Error !, intente de nuevo");
                    this.setState({
                        authorized: true,
                        loading: false,
                        data: [],
                      });
                }else{
                    var dataObject = response.data.map((item,index)=>{ 
                        return {    "formAction_id": item[0], "formAction_formId": item[1], "formAction_actionId": item[2],
                                    "formAction_itemOrder": item[3] , "isTheRol":item[4], "form":item[5], 
                                    "formGroup": item[6], "action": item[7], "formAction_formActioId": item[8], 
                                    "rolId": item[9], "formPath": item[10], "actionPath":item[11], 
                                    "system":item[12]  
                                } 
                    });
                    this.setState({authorized: true,loading: false,data: dataObject});
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
                 <Table pageSize={this.state.pageSize} 
                        header = {this.state.header} 
                        data={this.state.data} 
                        cancelRegister={this.cancelRegister} customActions={this.state.customActions}/>
            </div>
        )
    }
}

export default RolFormAction;