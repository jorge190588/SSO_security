import React from 'react';
import MaterialTable from 'material-table';
import TablePagination from '@material-ui/core/TablePagination';
import { IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import ButtonBack from 'components/Table/Buttonback';

export default function Table(props) {
    const actionsList =[];
    
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
                tooltip: 'Cancelar registro',
                onClick: function() { props.cancelRegister(rowData); }
            }
        });
    }

    const [state] = React.useState({
        columns: props.header,
        data: props.data,
        rowsPerPage: 10
    });

   
  return (
    <div>
        <MaterialTable
            localization={{
            toolbar: {
                searchPlaceholder: "Buscar",
                searchTooltip: "Buscar "
            },
            pagination:{
                labelRowsSelect:"Registros",
                labelRowsPerPage:"Filas por pagina"
            },
            body: {
                deleteTooltip: "Eliminar",
                emptyDataSourceMessage: "No existen registros"
            }
            }}
            title="Listado de registros"
            columns={state.columns}
            data={state.data}
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
                            <IconButton aria-label={element.icon} size="small"
                                onClick={element.onClick}
                            >
                                <Icon>{element.icon}</Icon>
                            </IconButton>
                            )
                    }else{
                        return (
                            <ButtonBack     icon={props.action.icon} tooltip={props.action.tooltip}
                                            onClick={props.action.onClick}
                            >
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