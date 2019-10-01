import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Input, InputLabel} from '@material-ui/core/';
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

export default function FormControlInput(props) {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl} >
            <InputLabel htmlFor="component-error">{props.label}</InputLabel>
            <Input error={props.isError} 
                key={props.name}
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                aria-describedby="component-error-text"
            />
            {(props.isError) ? <FormHelperText className="Mui-error" id="component-error-text">{props.errorMessages}</FormHelperText> : null }
        </FormControl>  
    )
}