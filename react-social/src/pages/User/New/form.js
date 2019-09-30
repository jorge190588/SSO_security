import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Input, TextField, Button, Paper, InputLabel, Select, MenuItem} from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const useStyles = makeStyles(theme => ({
    root:{
        marginTop:'5px'
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    TextValidator:{
        minWidth: 300,
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
        name: {         patern:"^([\w_]){1,15}", validators: ['required'], errorMessages:['Campo requiere de 1 a 15 caracteres'], isError:false },
        email: {        pattern: "^([\w-\\.]+){1,20}@([\w]+){2,20}.[a-z]{2,10}$", validators: ['required'], errorMessages:['Este campo es requerido'], isError:false },
        password: {     patern:"^([\w-\\.]+){1,20}$", validators: ['required'], errorMessages:['Este campo es requerido'], isError:false },
        repassword: {   patern:"^([\w-\\.]+){1,20}$", validators: ['required'], errorMessages:['Este campo es requerido'], isError:false },
        rol_id: {       patern:"^([0-9]+){1,2}$", validators: ['required'], errorMessages:['Este campo es requerido'], isError:false },
      });
  
    const handleChange = event => {        
        console.log(event.target.value.match(validations[event.target.name].patern));
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const saveAndClean= function(event){
        props.save(values,false);
    }
    
    const saveAndBack = function(event){
        props.save(values,true);
    }

    const cleanValues=function(){
        Object.keys(values).map(key => {
            if ((typeof values[key] === 'object')===false){
                values[key]='';
                setValues({ ...values});
            } 
        });
    }

     

    if (props.clean){
        cleanValues();        
    }

    return (
        
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={3}> </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="component-error">Name</InputLabel>
                    <Input
                        id="component-error"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        aria-describedby="component-error-text"
                    />
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                </FormControl>

                </Paper>
            </Grid>
        </Grid>
    
 
  );
}

/*
<Paper className={classes.paper}>
                    <TextField className={classes.textField}
                        id="name"
                        label="Usuario"
                        value={values.name}
                        onChange={handleChange('name')}
                        margin="normal"
                        aria-describedby="component-error-text"
                        />
                        
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                    <TextField className={classes.textField}
                        id="email"
                        label="Correo"
                        value={values["email"]}
                        onChange={handleChange('email')}
                        margin="normal"/>
                    
                    <TextField className={classes.passwordField}
                        id="password"
                        label="Clave"
                        type="password"
                        value={values.password}
                        onChange={handleChange('password')}
                        margin="normal"
                        />

                    <TextField className={classes.passwordField}
                        id="repassword"
                        label="Confirmar clave"
                        type="password"
                        value={values.repassword}
                        onChange={handleChange('repassword')}
                        margin="normal"
                        />
                    
                    <InputLabel className={classes.textField}>Rol de usuario</InputLabel>
                    <Select className={classes.select}
                        value={values.rol_id}
                        onChange={handleChange('rol_id')}
                        inputProps={{
                            name: 'rol_id',
                            id: 'rol_id',
                        }}
                    >
                    
                        {(values.rol.length > 0) ? (
                            values.rol.map((option, index) => (    
                            <MenuItem key={index} value={option.id}>{option.name}</MenuItem>    
                            ))
                        ): null
                        }
                        
                    </Select>

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
*/