import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    buttonColor: props => ({
        color: props.icon==="delete"  ? "rgba(254, 0, 0, 0.8)": 
                props.icon==="edit" ? "rgba(17, 82, 147, 0.8)": 
                props.icon==="arrow_upward" ? "rgba(33, 150, 243, 1)": 
                props.icon==="arrow_downward" ? "rgba(77, 81, 108, 1)": 
                props.icon==="reorder" ? "rgba(245, 124, 0, 1)": 
                props.icon==="view_week" ? "rgba(33, 150, 243, 1)": 
                props.icon==="calendar_view_day" ? "rgba(77, 81, 108, 1)": "#272c34",
    })
  }));