import React from 'react';
import {Input, InputLabel} from '@material-ui/core/';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import {useStyles} from './style';

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
                onKeyPress={props.keyPress}
                disabled={props.disabled}
                aria-describedby="component-error-text"
            />
            {(props.isError) ? <FormHelperText className="Mui-error" id="component-error-text">{props.errorMessages}</FormHelperText> : null }
        </FormControl>  
    )
}