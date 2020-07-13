import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme=>({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& label.Mui-focused': {
            color: '#ed84ef',                  
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ed84ef',
            },
            '&:hover fieldset': {
                borderColor: '#FE6B8B',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ed84ef',
            },
        }
  },
  textField: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',            
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      background: "rgba(130, 30, 224, 0.2)",
      borderRadius: 45,
      [`& fieldset`]: {
          borderRadius: 45,
        },

  },
    input: {
        color: 'black', 
        '& > *':{
            ['&.MuiOutlinedInput']:{
                padding: '0%'
            }
        }
    },
    button : {
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