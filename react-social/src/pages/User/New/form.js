import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Input, TextField, Button, Paper, InputLabel, Select, MenuItem} from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { element } from 'prop-types';

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

    const saveAndClean= function(event){
        var isValid = isValidForm();        
        if(isValid===true){
            var data = {};
            Object.keys(elements).map(key => {
                data[key]=elements[key].value;
            })
            props.save(data,false);
        }
    }
    
    const saveAndBack = function(event){
        var isValid = isValidForm();
        if(isValid===true){
            props.save(elements, true);
        }
    }

    const cleanValues=function(){
        Object.keys(elements).map(key => {
            if ((typeof elements[key].value === 'object')===false){
                elements[key].value='';
                setElements({ ...elements});
            } 
        });
    }    

    const isValidForm=function(){
        var isValid = true;
        Object.keys(elements).map(function(key, index) {
            if (elements[key]!==undefined){
                if ((elements[key].value.toString().match(elements[key].pattern))===null){
                    elements[key].isError=true;
                    isValid=false;
                }else {
                    elements[key].isError=false;
                }
            }
        });
        setElements({ ...elements});
        return isValid;
    }

    if (props.clean){   cleanValues();          }

    return (
        
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={3}> </Grid>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="component-error">Usuario</InputLabel>
                        <Input error={elements["name"].isError}
                            id="component-error"
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
                            id="component-error"
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
                            id="component-error"
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
                            id="component-error"
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
                        {elements.rol.value.map(option => (
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

/*
export default function Table(props) {
    const classes = useStyles();
    const [elements,setElements] = React.useState(props.elements);

    const [form,setForm] = React.useState();

    const [values, setValues] = React.useState({
      name: '',
      email: '',
      password: '',
      repassword: '',
      rol_id: 0,
      rol: [{id: 1, name:'Admin'},{id:2 , name:'Usuario'}]
    });

    const [validations, setValidations] = React.useState({
        name: {         pattern:"^([\\w_]){1,15}", validators: ['required'], errorMessages:['Campo requiere un texto entre 1 a 15 caracteres'], isError:false },
        email: {        pattern: "^[\\w-+._%]+(\\.[\\w-]{1,20}){0,20}@[\\w-]{1,15}(\\.[\\w-]{1,5})+[\\w-]+$", validators: ['required'], errorMessages:['Campo requerido (ejemplo: jorge@gmail.com)'], isError:false },
        password: {     pattern:"^([\\w-\\.]+){1,20}$", validators: ['required'], errorMessages:['Campo requerido (ejemplo: Jorge10$%)'], isError:false },
        repassword: {   pattern:"^([\\w-\\.]+){1,20}$", validators: ['required'], errorMessages:['Campo requerido (ejemplo: Jorge10$%)'], isError:false },
        rol_id: {       pattern:"^[1-9][0-9]*$", validators: ['required'], errorMessages:['Campo requerido'], isError:false },
      });

    const handleChange = event => {        
        validations[event.target.name].isError= ((event.target.value.toString().match(validations[event.target.name].pattern))===null) ? true : false;
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const saveAndClean= function(event){
        var isValid = isValidForm();
        if(isValid===true){
            props.save(values,false);
        }
    }
    
    const saveAndBack = function(event){
        var isValid = isValidForm();
        if(isValid===true){
            props.save(values,true);
        }
    }

    const cleanValues=function(){
        Object.keys(values).map(key => {
            if ((typeof values[key] === 'object')===false){
                values[key]='';
                setValues({ ...values});
            } 
        });
    }    

    const isValidForm=function(){
        var isValid = true;
        Object.keys(validations).map(function(key, index) {
            if (validations[key]!==undefined){
                if ((values[key].toString().match(validations[key].pattern))===null){
                    validations[key].isError=true;
                    isValid=false;
                }
            }
        });
        setValues({ ...values});
        return isValid;
    }

    if (props.clean){   cleanValues();          }

    return (
        
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={3}> </Grid>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="component-error">Usuario</InputLabel>
                        <Input error={validations["name"].isError}
                            id="component-error"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            aria-describedby="component-error-text"
                        />
                        {(validations["name"].isError) ? <FormHelperText className="Mui-error" id="component-error-text">{validations["name"].errorMessages}</FormHelperText> : null }
                    </FormControl>

                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="component-error">Correo electrónico</InputLabel>
                        <Input error={validations["email"].isError}
                            id="component-error"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            aria-describedby="component-error-text"
                        />
                        {(validations["email"].isError) ? <FormHelperText className="Mui-error" id="component-error-text">{validations["email"].errorMessages}</FormHelperText> : null }
                    </FormControl>

                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="component-error">Clave</InputLabel>
                        <Input error={validations["password"].isError}
                            id="component-error"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            aria-describedby="component-error-text"
                        />
                        {(validations["password"].isError) ? <FormHelperText className="Mui-error" id="component-error-text">{validations["password"].errorMessages}</FormHelperText> : null }
                    </FormControl>

                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="component-error">Confirmar clave</InputLabel>
                        <Input error={validations["repassword"].isError}
                            type="password"
                            id="component-error"
                            name="repassword"
                            value={values.repassword}
                            onChange={handleChange}
                            aria-describedby="component-error-text"
                        />
                        {(validations["repassword"].isError) ? <FormHelperText className="Mui-error" id="component-error-text">{validations["repassword"].errorMessages}</FormHelperText> : null }
                    </FormControl>

                    <TextField
                        name= 'rol_id'
                        id="outlined-select-currency"
                        select
                        label="Rol de usuario"
                        className={classes.textField}
                        value={values.rol_id}
                        onChange={handleChange}
                        SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                        }}
                        helperText={values.rol_id === 0 ? 'Seleccione una opción' : ' '}
                        margin="normal"
                    >
                        {values.rol.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                        ))}
                        
                    </TextField>
                    {(validations["rol_id"].isError) ? <FormHelperText className="Mui-error" id="component-error-text">{validations["rol_id"].errorMessages}</FormHelperText> : null }

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
*/