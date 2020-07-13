import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme=>({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
    inputControl:{
        width: '75%',
    },
    textField: {
        width: '90%',
    },
    input: {
        color: 'black'
    },
    button : {
        margin:'29%',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    circularProgress:{
        "& >div":{
            color:"#fff"
        }
    },
    inputError:{
        "&>label":{
            color:"red",
        }
    }
}))