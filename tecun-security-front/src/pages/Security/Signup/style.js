import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme=>({

            signupContainer : {
                textAlign: 'center',
                backgroundAttachment: 'fixed',
                overflow: 'hidden',
                backgroundSize: 'cover',
                backgroundImage: `url(/img/starsback.svg)`,
                maxWidth: '2000px',
                height: '100%',
                width: '100%',
            },

            signupBox :{
                position: 'relative',
                margin:  'auto',
                padding: 0,
                background: '#fff',

                ['@media (min-width:990px)']:{ // web
                    width: '50%',
                    height: '61%',
                    marginTop: '12%',
                },
                ['@media (max-width:768px)']:{ // ipad
                    width: '94%',
                    height: '44%',
                    marginTop: '38%',
                },

                ['@media (max-width: 650px)']:{ //mobil
                    width: '90%',
                    height: '77%',
                    marginTop: '11%',

                },
                ['@media (max-width:415px)']:{ // mobil
                    width: '75%',
                    height: '96%',
                    marginTop: '2%',
                },
        
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
                animation: '$blink 2s linear infinite',
            },

            leftBox : {
                position: 'absolute',
                boxSizing: 'borderBox',
                width: '43%',
                height: 'auto',
                top: '-4%',
                left: '0',
                padding: '4%',
                ['@media (max-width: 650px)']:{
                    width: '45%',
                    heigth: '4%',
                    padding: '0% 4%',
                },

                ['@media (max-width:415px)']:{ // mobil
                    width: '85%',
                    heigth: '45%',
                    top: '0%',
                    left: '7%',
                    padding: '0%',
                },
            },

            titleLeft : {
                marginBottom: '5%',
                fontWeight: '500',
                fontSize: '22px', 
                color: `rgb(73, 7, 90)`,
                textAlign: 'center',
                textShadow: `0 2px 4px rgba(199, 96, 194, 0.52)`,

                ['@media (max-width:415px)']:{
                    margin: '0%',
                    fontSize: '20px',
                }
            },

            rightBox : {
                position: 'absolute',
                boxSizing: 'borderBox',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                top: '-2%',
                right: '0',
                padding: '5%',
                width: '50%',
                height: '100%',
                
                ['@media (max-width:415px)']:{ // mobil
                    top: '71%',
                    right: '0',
                    left: '8%',
                    padding: '5%',
                    width: '85%',
                    height: '45%',
                },
            },

            signinwith : {

                display: 'block',
                textAlign: 'center',
                color: `rgb(73, 7, 90)`,
                textShadow: `0 2px 4px rgba(199, 96, 194, 0.52)`,
                fontWeight: '500',

                ['@media (min-width:990px)']:{ // web
                    marginBottom: '10%',
                    fontSize: '25px',
                },
                ['@media (max-width:768px)']:{ // ipad
                    margin: '0%',
                    fontSize: '18px',
                },
                ['@media (max-width:415px)']:{ // mobil
                    margin: '0%',
                    fontSize: '21px',
                },
            },

            or : {
                position: 'absolute',
                background: '#e2ace8',
                boxShadow: `0 2px 4px rgba(69, 16, 86)`,
                textAlign: 'center',
                top: '44%',
                left: '44%',
                width: '5%',
                height: '11%',
                lineHeight: '41px',
                borderRadius: '27%',

                ['@media (max-width:615px)']:{ // mobil
                    top: '67%',
                    left: '41%',
                    width: '17%',
                    height: '4%',
                    lineHeight: '20px',
                    borderRadius: '27%',
                },
            },


            //-------------------------------------------------------------------
            '@keyframes blink' : {
                '0%': { 
                    boxShadow: '0 0 25px rgb(176, 50, 235)',
                },
                '50%':{ 
                    boxShadow: '0 0 25px rgb(224, 224, 17)', 
                },
                '100%' : { 
                    boxShadow : '0 0 25px rgb(223, 104, 35)',
                }
            },
        }
    )
)