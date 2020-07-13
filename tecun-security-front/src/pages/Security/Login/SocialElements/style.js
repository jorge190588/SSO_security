import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme=>({

                Imsocial : {
                    height: '92%',

                    ['@media (max-width: 415px)']:{
                        marginTop: '7%',
                        height: '47%',
                        margin: '4%',
                    }

                },

                socialContent : {   
                    ['@media (max-width: 415px)']:{
                        height: '54%',
                        marginTop: '8%', 
                        display: 'block'
                    }
                },

                btnSocial : {  
                    
                    ['@media (min-width: 500px )'] : {
                        display: 'block',
                        position: 'relative',  
                        height: '47px',
                        width: '100%',
                        cursor: 'pointer',
                        border: '1px solid transparent',    
                        borderRadius: '46px',                                             
                        borderColor: '#ed84ef',
                        outline: 'none',
                        background: `rgba(130, 30, 224, 0.2)`,
                        marginBottom: 15,
                        fontWeight: 400,
                        paddingTop: 5,
                            "&:hover":{
                                transition: "0.4s",
                                backgroundColor: "#EA2B2B",
                                color: "#fff",

                    }
                }  
            }   
        }
    )
)