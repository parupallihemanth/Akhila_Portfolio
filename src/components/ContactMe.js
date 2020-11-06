import React from 'react';
import Lottie from 'react-lottie';
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme} from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography";
import Contact from '../Animations/8645-perfume-app-animation-2.json';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';   
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles( (theme) => ({
  
    contactContainer : {
        background : "#fdf0f2",
        height : '90vh',
        [ theme.breakpoints.down('xs')] :{
            height : '150vh',
        },
    },
    sectionTitle : {
        fontFamily : 'roboto',
        fontWeight : '700'
    },
    contactText :{
        fontFamily : 'roboto',
        fontWeight : '700',
        fontSize : '1em',
        letterSpacing : '2px'
    },
    contactLottie : {
        marginLeft : '4em',
        [ theme.breakpoints.down('xs')] :{
            marginLeft : '0em',
        },
    },
    contact :{
        marginTop: '2em',
        [ theme.breakpoints.down('md')] :{
            marginTop: '-25em',
        },
    },
    p :{
        fontWeight : '700',
        letterSpacing : '1px',
        marginTop : '1em',
        marginBottom : "1em"
    }


}))

function ContactMe() {
    const classes = useStyles();
    const theme = useTheme();
    const matchMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchSM = useMediaQuery(theme.breakpoints.down("SM"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Contact,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (

        <Grid container  className={classes.contactContainer} id="contact" spacing={2}>
            
            
            <Grid item className={classes.contactLottie}>
            <Lottie options={defaultOptions}  height={400} width={400}  />
            </Grid>

            <Grid item className={classes.contact}>
                <Typography variant="h4" align={ matchMD ? "center" : 'undefined'} className={classes.sectionTitle}> Get in touch  </Typography>
                <Typography variant="h6" align={ matchMD ? "center" : 'undefined'} >If you have any questions, please feel free to drop me a message. I'll get back to you as <br />soon  as possible. That's a promise.</Typography>
                <Grid container justify={ matchMD ? "center" : 'undefined'}>
                    <Grid item>
                        <PhoneIphoneIcon fontSize="large" />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.contactText}>(902) 456-7890</Typography>
                    </Grid>

                </Grid>
                <Grid container justify={ matchMD ? "center" : 'undefined'}>
                    <Grid item>
                        <MailOutlineIcon fontSize="large"/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.contactText}>akhila@gmail.com</Typography>
                    </Grid>

                </Grid>
                <Grid container direction="row" style={{ marginTop:'2em'}} justify={ matchMD ? "center" : 'undefined'}>
                    
                    <Grid item>
                    <LinkedInIcon fontSize="large" />
                    </Grid>
                    <Grid>
                    <InstagramIcon fontSize="large" style={{ marginLeft: '1em', marginRight:'1em'}}/>
                    </Grid>
                    <Grid item>
                    <FacebookIcon fontSize="large"/>
                    </Grid>

                </Grid>
            </Grid>
            
            
            

        </Grid>
        // <div>
           
        // </div>
    )
}

export default ContactMe
