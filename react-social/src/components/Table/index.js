import React from 'react';
import MaterialTable from 'material-table';
import TablePagination from '@material-ui/core/TablePagination';

export default function Table(props) {
  const [state] = React.useState({
    columns: props.header,
    data: props.data,
    rowsPerPage: 10
  });

   
  return (
    <div>
        <MaterialTable minRows={10}
        
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
        actions={[
            {
            icon: 'add',
            tooltip: 'Agregar',
            isFreeAction: true,
            onClick: props.addRegister
            },
            {
                icon: 'save',
                tooltip: 'Modificar',
                onClick:  props.updateRegister//(event, rowData) => alert("Modificar " + rowData.name)
              },
              rowData => ({
                icon: 'delete',
                tooltip: 'Eliminar',
                onClick: (event, rowData) => alert("Eliminar ? " + rowData.name),
                //disabled: rowData.birthYear < 2000
              }),
              rowData => ({
                  icon: 'visibility',
                  tooltip: 'Ver información',
                  onClick: props.updateRegister// (event, rowData) => alert("Ver informacion ? " + rowData.name),
                  //disabled: rowData.birthYear < 2000
                }),
        ]}

        options={{
            pageSize: 10,
            pageSizeOptions: [5, 10, 20, 30 ,50, 75, 100 ],
            toolbar: true,
            paging: true,
            actionsColumnIndex: -1
        }}
         
        components={{
             
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