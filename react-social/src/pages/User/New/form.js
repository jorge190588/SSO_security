import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField, Button, Paper, InputLabel, Select, MenuItem} from '@material-ui/core/';
import Alert from 'react-s-alert';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
    root:{
        marginTop:'5px'
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
    },
    passwordField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
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
    const [values, setValues] = React.useState({
      name: '',
      email: '',
      password: '',
      repassword: '',
      rol_id: 0,
      rol: [{id: 1, name:'Admin'},{id:2 , name:'Usuario'}]
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

    const saveAndClean= function(){
        props.save(values,false);
    }
    
    const saveAndBack = function(){
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
                    <TextField className={classes.textField}
                        id="name"
                        label="Usuario"
                        value={values.name}
                        onChange={handleChange('name')}
                        margin="normal"
                        />
                        
                    <TextField className={classes.textField}
                        id="email"
                        label="Correo"
                        value={values["email"]}
                        onChange={handleChange('email')}
                        margin="normal"/>
                    
                    <TextField className={classes.passwordField}
                        id="password"
                        label="Clave"
                        value={values.password}
                        onChange={handleChange('password')}
                        margin="normal"
                        />

                    <TextField className={classes.passwordField}
                        id="repassword"
                        label="Confirmar clave"
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
            </Grid>
        </Grid>
    
 
  );
}
 