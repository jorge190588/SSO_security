import React from 'react';
import MaterialTable from 'material-table';

export default function Table(props) {
  const [state, setState] = React.useState({
    columns: props.header,
    data: props.data,
  });

  return (
    <MaterialTable
      
    localization={{
      toolbar: {
        searchPlaceholder: "Buscar",
        searchTooltip: "Buscar "
      },
      pagination:{
        labelRowsSelect:"Registros"
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
        }
      ]}
    />
  );
}