import React from 'react';
import MaterialTable from 'material-table';

export default function Table(props) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'id' },
      { title: 'Nombre', field: 'name' },
      { title: 'Correo', field: 'email' },
      { title: 'Correo verificado', field: 'emailVerified', type: 'boolean' },
      {
        title: 'Rol',
        field: 'rol_id',
        lookup: { 1: 'Admin', 2: 'Usuario' },
      },
      { title: 'Imagen', field: 'imageUrl' },
    ],
    data: props.data,
  });

  return (
    <MaterialTable
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