import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Input, TextField, Button, Paper, InputLabel, MenuItem} from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
    root:{
        marginTop:'5px'
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl:{
        minWidth: 300,
        marginRight: theme.spacing(2),
    },
    textField:{
        minWidth: 300,
        marginRight: theme.spacing(2),
    },
    button:{
        margin: theme.spacing(1),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    select: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
  }));

export default function Table(props) {
    const classes = useStyles();
    const [elements,setElements] = React.useState(props.elements);
         
    const handleChange = event => {        
        elements[event.target.name].isError= ((event.target.value.toString().match(elements[event.target.name].pattern))===null) ? true : false;
        elements[event.target.name].value = event.target.value;
        setElements({ ...elements});
    };

    const saveAndClean= function(){
        var isValid = isValidForm();        
        if(isValid===true)  props.save(getData(),false);
    }

    const getData=function(){
        var data = {};
        Object.keys(elements).map(key => data[key]=elements[key].value)
        return data;
    }

    const saveAndBack = function(){
        var isValid = isValidForm();        
        if(isValid===true)  props.save(getData(),true);
    }

    const isValidForm=function(){
        var isValid = true;
        Object.keys(elements).forEach(function (key) {
            if ((elements[key].value.toString().match(elements[key].pattern))===null)  { elements[key].isError=true; isValid=false;}
            else    elements[key].isError=false;
         });
          
        setElements({ ...elements});
        return isValid;
    }
 
    return (
        
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={3}> </Grid>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    
                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="component-error">Usuario</InputLabel>
                        <Input error={elements["name"].isError}
                            id="name"
                            name="name"
                            value={elements.name.value}
                            onChange={handleChange}
                            aria-describedby="component-error-text"
                        />
                        {(elements["name"].isError) ? <FormHelperText className="Mui-error" id="component-error-text">{elements["name"].errorMessages}</FormHelperText> : null }
                    </FormControl>

                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="component-error">Correo electrónico</InputLabel>
                        <Input error={elements["email"].isError}
                            id="email"
                            name="email"
                            value={elements.email.value}
                            onChange={handleChange}
                            aria-describedby="component-error-text"
                        />
                        {(elements["email"].isError) ? <FormHelperText className="Mui-error" id="component-error-text">{elements["email"].errorMessages}</FormHelperText> : null }
                    </FormControl>

                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="component-error">Clave</InputLabel>
                        <Input error={elements["password"].isError}
                            id="password"
                            type="password"
                            name="password"
                            value={elements.password.value}
                            onChange={handleChange}
                            aria-describedby="component-error-text"
                        />
                        {(elements["password"].isError) ? <FormHelperText className="Mui-error" id="component-error-text">{elements["password"].errorMessages}</FormHelperText> : null }
                    </FormControl>

                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="component-error">Confirmar clave</InputLabel>
                        <Input error={elements["repassword"].isError}
                            type="password"
                            id="repassword"
                            name="repassword"
                            value={elements.repassword.value}
                            onChange={handleChange}
                            aria-describedby="component-error-text"
                        />
                        {(elements["repassword"].isError) ? <FormHelperText className="Mui-error" id="component-error-text">{elements["repassword"].errorMessages}</FormHelperText> : null }
                    </FormControl>

                    <TextField
                        name= 'rol_id'
                        id="outlined-select-currency"
                        select
                        label="Rol de usuario"
                        className={classes.textField}
                        value={elements.rol_id.value}
                        onChange={handleChange}
                        SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                        }}
                        helperText={elements.rol_id.value === 0 ? 'Seleccione una opción' : ' '}
                        margin="normal"
                    >
                        {elements.rol_id.list.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                        ))}
                        
                    </TextField>
                    {(elements["rol_id"].isError) ? <FormHelperText className="Mui-error" id="component-error-text">{elements["rol_id"].errorMessages}</FormHelperText> : null }

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" className={classes.button} onClick={saveAndClean}>
                            <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                            Guardar y limpiar
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button} onClick={saveAndBack}>
                            <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                            Guardar y regresar
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.button} onClick={props.handleShowList} >
                            <CancelIcon className={classes.leftIcon} />
                            Cancelar
                        </Button>
                    </Grid>

                </Paper>
            </Grid>
        </Grid>
    
 
  );
} 
