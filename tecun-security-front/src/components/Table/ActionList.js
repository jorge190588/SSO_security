export default class ActionList {
    constructor(props,setModalParams){
        this.props=props;
        this.setModalParams= setModalParams;
        this.list=[];
    }
    
    setCustomActions(){
        if (this.props.customActions!==undefined)
            Object.keys(this.props.customActions).forEach(key=> 
                this.list.push(this.props.customActions[key])    
            );
    }

    setAdd(){
        if (this.props.addRegister){
            let self=this;
            this.list.push({
                icon: 'add',
                tooltip: 'Agregar',
                isFreeAction: true,
                onClick: self.props.addRegister
            });
        }
    }

    setRefreshList(){
        if (this.props.refreshList){
            let self=this;
            this.list.push({
                icon: 'refresh',
                tooltip: 'Actualizar',
                isFreeAction: true,
                onClick: self.props.refreshList
            });
        }
    }
    
    setUpdate(){
        if (this.props.updateRegister){
            let self=this;
            this.list.push(function(rowData){ 
                return {
                    icon: 'edit',
                    tooltip: 'Modificar',
                    onClick: function() { self.props.updateRegister(rowData); }
                }
            });
        }
    }
    
    setView(){
        if (this.props.viewRegister){
            let self=this;
            this.list.push(function(rowData){ 
                return {
                    icon: 'visibility',
                    tooltip: 'Ver información',
                    isFreeAction: false,
                    onClick: function() { self.props.viewRegister(rowData); }
                }
            });
        }
    }
    
    setCancel(){
        if (this.props.cancelRegister){
            let self=this;
            this.list.push(function(rowData){ 
                return {
                    icon: 'cancel',
                    tooltip: 'Cancelar',
                    isFreeAction: false,
                    onClick: function() { self.props.cancelRegister(rowData); }
                }
            });
        }
    }

    setEnable(){
        if (this.props.enableRegister){
            let self=this;
            this.list.push(function(rowData){ 
                return {
                    icon: 'arrow_upward',
                    tooltip: 'Habilitar',
                    isFreeAction: false,
                    onClick: function() { 
                        self.setModalParams({'open':true,'data':rowData,'handler':self.props.enableRegister, 'message':"¿Desea habilitar el registro ?"});
                    }
                }
            });
        }
    
    }
    
    setDisable(){
        if (this.props.disableRegister){
            let self=this;
            this.list.push(function(rowData){ 
                return {
                    icon: 'arrow_downward',
                    tooltip: 'Deshabilitar',
                    isFreeAction: false,
                    onClick: function() { 
                        self.setModalParams({'open':true,'data':rowData,'handler':self.props.disableRegister, 'message':"¿Desea deshabilitar el registro ?"});
                    }
                }
            });
        }
    }
    
    setDelete(){
        if (this.props.deleteRegister){
            let self=this;
            this.list.push(function(rowData){ 
                return {
                    icon: 'delete',
                    tooltip: 'Eliminar registro',
                    isFreeAction: false,
                    onClick: function() { 
                        self.setModalParams({'open':true,'data':rowData,'handler':self.props.deleteRegister, 'message':"¿Desea eliminar el registro ?"});
                    }
                }
            });
        }    
    }
    
    getList(){ 
        this.setCustomActions();
        this.setAdd();
        this.setUpdate();
        this.setView();
        this.setCancel();
        this.setEnable();
        this.setDisable();
        this.setDelete();
        this.setRefreshList();
        return this.list;
    }
}