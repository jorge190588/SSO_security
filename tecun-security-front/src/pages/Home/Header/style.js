import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme=>({
        icon:{
            fontSize: 300,
            color: "rgba(255, 255, 255, .5)",
            paddingTop: "10%",
            paddingLeft: "15%",
            "&:hover":{
                "-webkit-transform": "scale(1.3)",
                "-o-transform": "scale(1.3)",
                "-moz-transform": "scale(1.3)",
            }
        },
        footer:{
            zIndex: "unset",
            top:"auto",
            bottom: -5,
            position :"absolute",
            width: "100%",
            fill: "#fff",
            svg:{
                bottom: 0,
                verticalAlign: "middle"
            }
        },
        title: {
            flexGrow: 1,
            fontWeight: 600,
            lineHeight: 1.5,
            fontSize: "2.1875rem",
            paddingTop: "10%",
            color:"#fff",
        },
        subtitle:{
            color:"#fff",
            fontWeight: 300,
            fontSize: "2.1875rem",
        },
        description:{
            color:"#fff",
            fontWeight: 300,
            lineHeight: 1.7,
            fontSize: "1.25rem",

        },
        header:{
            position: "relative!important",
            background: "linear-gradient(150deg,#7795f8 15%,#6772e5 70%,#555abf 94%)",
            height: 500,
        },
        span:  {
            padding:50,
            background: "rgba(255, 255, 255, .1)",
            borderRadius: "50%",
            position: "absolute",
            "&:hover":{
                "-webkit-transform": "scale(1.3)",
                "-o-transform": "scale(1.3)",
                "-moz-transform": "scale(1.3)",
            },
            "&:nth-child(0)": {
                left: "10%",
                bottom: "auto",
                background: "rgba(255, 255, 255, .1)"
            },
            "&:nth-child(1)": {
                left: "-1%",
                bottom: "auto",
                background: "rgba(255, 255, 255, .1)"
            },
            "&:nth-child(2)":{
                right: "4%",
                top: "10%",
                background: "rgba(255, 255, 255, .1)"
            },
            "&:nth-child(3)":{
                top: 280,
                right: "5.66666%",
                background: "rgba(255, 255, 255, .3)"
            },
            "&:nth-child(4)":{
                top: 320,
                right: "7%",
                background: "rgba(255, 255, 255, .15)"
            },
            "&:nth-child(5)":{
                top: "38%",
                left: "10%",
                right: "auto",
                background: "rgba(255, 255, 255, .05)"
            },
            "&:nth-child(6)": {
                width: 150,
                height: 150,
                top: "48%",
                left: "10%",
                right: "auto",
                background: "rgba(255, 255, 255, .15)"
            },
            "&:nth-child(7)": {
                bottom: "50%",
                right: "26%",
                background: "rgba(255, 255, 255, .07)"
            },
            "&:nth-child(8)": {
                bottom: 70,
                right: "2%",
                background: "rgba(255, 255, 255, .2)"
            },
            "&:nth-child(9)": {
                bottom: "1%",
                right: "2%",
                background: "rgba(255, 255, 255, .1)"
            },
            "&:nth-child(10)": {
                bottom: "1%",
                left: "1%",
                right: "auto",
                background: "rgba(255, 255, 255, .05)"
            }  
        },
        gridRoot:{
            paddingTop: 30
        }
    })
);

