import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    hideInPrintView:{
        '@media print':{
            display:'none',
        },
    },
    root:{
        marginTop:'5px',
        marginLeft:'3%',
        marginRight: '3%',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    grid:{
        width: 300,
        display: 'inline-block'
    },
    button:{
        margin: theme.spacing(1),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
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
        minWidth: 200,
    },
    checkbox:{
        marginTop:5,
        width: 300
    },
    circularProgress:{
        "&>div":{
            color:"#fff",
            width:"25px !important",
            height:"25px !important",
            marginRight: 7,
        }
    }
}));