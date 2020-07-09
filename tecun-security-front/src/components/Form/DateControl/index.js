import 'date-fns';
import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import deLocale from "date-fns/locale/es";
import {useStyles} from './style';

export default function FormControlDate(props) {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl} >
            <MuiPickersUtilsProvider locale={deLocale} utils={DateFnsUtils} >
                <KeyboardDatePicker
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id={props.name}
                                    name={props.name}
                                    key={props.name}
                                    label={props.label}
                                    value={props.value}
                                    disabled={props.disabled}
                                    onChange={date=>{
                                        props.handleChange({"target":{"name":props.name,"value":date}})
                                    }}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                />
            </MuiPickersUtilsProvider>
        </FormControl>  
    )
}
