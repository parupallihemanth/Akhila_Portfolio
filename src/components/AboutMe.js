import React,{useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import main1 from '../Images/main2.png'

import Aos from "aos"
import "aos/dist/aos.css"

const useStyles = makeStyles( (theme) => ({

    aboutContainer :{
        marginLeft :'2em',
        [ theme.breakpoints.down('xs')] :{
            marginLeft :'0',
        },
        marginTop : '3em',
        width : '100%',
        overflow : 'visible',
        [ theme.breakpoints.down("md")] :{
            marginTop : '1em',
            width : '100%',
        }
    },
    p:{
        fontSize :'1.5rem',
        [ theme.breakpoints.down('xs')] :{
            fontSize : '1em',
        },
        fontFamily : 'roboto',
        
    },
    role : {
        fontSize : '2em',
        [ theme.breakpoints.down('xs')] :{
            fontSize : '1em',
        },
        fontWeight : 'bold',
        

        
    },

    

    
    
    mainImage :{
        marginTop : '2em',
        [ theme.breakpoints.down('xs')] :{
            marginTop : '0.5em',
        },
        borderRadius : '15px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.5)',
        [ theme.breakpoints.down('xs')] :{
            width : '85%'
        },
       
     }


}))

function AboutMe() {
    const classes = useStyles();

    useEffect( () => {
        Aos.init({ duration: 2000})
}, [])
    return (
        <Grid data-aos="fade-right" container className={ classes.aboutContainer} spacing={8} justify="center">
            <Grid item sm >
                <Typography variant="h5">I'm a <span className={classes.role}>Business Analyst</span></Typography>
                <p className={classes.p}>Hellenism was the combination of Greek, Persian, and Egyptian cultures. During this
                remarkable time period, people  were encouraged to pursue a formal education and
                produce many different kinds of art. New forms of math,  science,  and design made a
                great impact on society.</p>
                <p className={classes.p}>Hellenism was the combination of Greek, Persian, and Egyptian cultures. During this
                remarkable time period, people  were encouraged to pursue a formal education and
                produce many different kinds of art. New forms of math,  science,  and design made a
                great impact on society.</p>
            </Grid> 
            <Grid item data-aos="fade-left" sm className={classes.aboutPart}>
                <img  src={main1} className={classes.mainImage} height="85%"  />
            </Grid>
            
        </Grid>
    )
}

export default AboutMe
