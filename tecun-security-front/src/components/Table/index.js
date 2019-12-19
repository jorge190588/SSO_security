import React from 'react';
import MaterialTable from 'material-table';
import TablePagination from '@material-ui/core/TablePagination';
import { IconButton, Tooltip  } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import ButtonBack from 'components/Table/Buttonback';
import searchCriteriaTools  from 'services/SearchCriteriaTools';
import orderCriteriaTools  from 'services/OrderCriteriaTools';
import ModalConfirmation from 'components/ModalConfirmation';

export default function Table(props) {
    const actionsList =[];
    const [modalParams, setModalParams] = React.useState({'open':false,'handler':null,'data':null});

    if (props.customActions){
        Object.keys(props.customActions).forEach(key=> 
            actionsList.push(props.customActions[key])    
        )
    }

    if (props.addRegister){
        actionsList.push({
            icon: 'add',
            tooltip: 'Agregar',
            isFreeAction: true,
            onClick: props.addRegister
        });
    }

    if (props.updateRegister){
        actionsList.push(function(rowData){ 
            return {
                icon: 'edit',
                tooltip: 'Modificar',
                onClick: function() { props.updateRegister(rowData); }
            }
        });
    }

    if (props.viewRegister){
        actionsList.push(function(rowData){ 
            return {
                icon: 'visibility',
                tooltip: 'Ver información',
                onClick: function() { props.viewRegister(rowData); }
            }
        });
    }

    if (props.cancelRegister){
        actionsList.push(function(rowData){ 
            return {
                icon: 'cancel',
                tooltip: 'Cancelar',
                onClick: function() { props.cancelRegister(rowData); }
            }
        });
    }

    if (props.enableRegister){
        actionsList.push(function(rowData){ 
            return {
                icon: 'arrow_upward',
                tooltip: 'Habilitar',
                onClick: function() { 
                    setModalParams({'open':true,'data':rowData,'handler':props.enableRegister, 'message':"¿Desea habilitar el registro ?"});
                }
            }
        });
    }

    if (props.disableRegister){
        actionsList.push(function(rowData){ 
            return {
                icon: 'arrow_downward',
                tooltip: 'Deshabilitar',
                onClick: function() { 
                    setModalParams({'open':true,'data':rowData,'handler':props.disableRegister, 'message':"¿Desea deshabilitar el registro ?"});
                }
            }
        });
    }

    if (props.deleteRegister){
        actionsList.push(function(rowData){ 
            return {
                icon: 'delete',
                tooltip: 'Eliminar registro',
                onClick: function() { 
                    setModalParams({'open':true,'data':rowData,'handler':props.deleteRegister, 'message':"¿Desea eliminar el registro ?"});
                }
            }
        });
    }

    const closeModal=(option)=>{
        setModalParams({'open':false});
        if (option) modalParams.handler(modalParams.data);
    }

    const getSearchCriteria=(search, header)=>{
        if (search.length===0) return undefined;
        searchCriteriaTools.clear();
        
        header.forEach(function(item) {
            searchCriteriaTools.addContains(item.field, search);    
        });
        return  searchCriteriaTools.get();
    }

    let lastSearchText = "";
    let lastOrderBy ={"field":"", "direction":""};

    const getOrderCriteria = (orderBy, orderDirection)=>{
        if (orderBy===undefined) return orderBy;
        orderCriteriaTools.clear();
        orderCriteriaTools.add(orderBy.field,  orderDirection);
        return orderCriteriaTools.get();
    }

    const getdata= async (query,header,functionList)=>{    
        let page= (lastSearchText=== query.search) ? query.page  : 0;
        
        if (query.orderBy!==undefined) {
            if (query.orderBy.field!==lastOrderBy.field || query.orderDirection !== lastOrderBy.direction){
                page=0;
            }
            lastOrderBy ={"field":query.orderBy.field, "direction":query.orderDirection};
        }else{
            lastOrderBy ={"field":"", "direction":""};
        }

        lastSearchText= query.search;
        
        let searchCriteria = getSearchCriteria(query.search,header);
        let orderCriteria  = getOrderCriteria(query.orderBy, query.orderDirection);
        
        let result = await functionList(page, query.pageSize, searchCriteria, orderCriteria); 
        return new Promise((resolve, reject) => { 
            if (result.data===null) resolve({ data: [], page: 0, totalCount: 0});// reject("Error al cargar los datos");
            else resolve({ data: result.data.content, page: result.data.number , totalCount: result.data.totalElements});
        })
    }

if (props.data===[]) return(null) 
  else return (
    <div>
        <ModalConfirmation open={modalParams.open} data={modalParams.data} handler={modalParams.handler} closeModal={closeModal} message={modalParams.message}/>
        <MaterialTable
            localization={{
                toolbar: {searchPlaceholder: "Buscar",searchTooltip: "Buscar "},
                pagination:{labelRowsSelect:"Registros",labelRowsPerPage:"Filas por pagina", 
                            labelDisplayedRows: 'Registros {from} al {to} de {count}',
                            
                            previousTooltip:'Pagina anterior', nextTooltip:'Página siguiente', lastTooltip:'Última página', firstTooltip:'Primera página'},
                body: {deleteTooltip: "Eliminar",emptyDataSourceMessage: "No existen registros"},
                header:{ actions: 'Opciones'}
            }}

            title="Listado de registros"
            columns={props.header}
            data = {(props.dataFunction!== undefined) ? query=>getdata(query,props.header, props.dataFunction) : props.data}
            actions={actionsList}

            options={{
                pageSize: 10,
                pageSizeOptions: [5, 10, 20, 30 ,50, 75, 100 ],
                toolbar: true,
                paging: true,
                actionsColumnIndex: -1
            }}
            
            components={{
                Action: props => {
                    if (typeof props.action === "function"){
                        var element= props.action(props.data);
                        return (
                            <Tooltip title={element.tooltip} leaveDelay={150}>
                                <IconButton aria-label={element.icon} size="small"
                                            onClick={element.onClick} label={element.tooltip}>
                                    <Icon>{element.icon}</Icon>
                                </IconButton>
                            </Tooltip>
                            )
                    }else{
                        return (
                            <ButtonBack     icon={props.action.icon} tooltip={props.action.tooltip}
                                            onClick={props.action.onClick}>
                            </ButtonBack>
                        )
                    }   
                },
                Pagination: props => (
                <TablePagination
                    {...props}
                    labelRowsPerPage={<div style={{fontSize: 14}}>{props.labelRowsPerPage}</div>}
                    labelDisplayedRows={row => <div style={{fontSize: 14}}>{props.labelDisplayedRows(row)}</div>}
                    SelectProps={{
                    style:{
                        fontSize: 14
                    }
                    }}                    
                />
                )
            }}
        >
        
        </MaterialTable>
         
    </div>
  );
}