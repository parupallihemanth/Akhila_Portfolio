import React from 'react';
import Lottie from 'react-lottie';
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme} from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography";
import Contact from '../Animations/8645-perfume-app-animation-2.json'

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';   
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles( () => ({
  
    contactContainer : {
        background : "#fdf0f2",
        height : '90vh',
       
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
        marginLeft : '4em'
    },
    contact :{
        marginTop: '2em'
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
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Contact,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (

        <Grid container  className={classes.contactContainer} id="contact" spacing={6}>
            
            
            <Grid item className={classes.contactLottie}>
            <Lottie options={defaultOptions}  height={400} width={400}  />
            </Grid>

            <Grid item className={classes.contact}>
                <Typography variant="h4" className={classes.sectionTitle}> Get in touch  </Typography>
                <Typography variant="h6" className={classes.p}>If you have any questions, please feel free to drop me a message. I'll get back to you as <br />soon  as possible. That's a promise.</Typography>
                <Grid container>
                    <Grid item>
                        <PhoneIphoneIcon fontSize="large" />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.contactText}>(902) 456-7890</Typography>
                    </Grid>

                </Grid>
                <Grid container>
                    <Grid item>
                        <MailOutlineIcon fontSize="large"/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.contactText}>akhila@gmail.com</Typography>
                    </Grid>

                </Grid>
                <Grid container direction="column" alignItems="stretch">
                    <Typography variant="h5" style={{ fontWeight:"bold", marginTop:'1em',marginBottom:'1em'}}>Social</Typography>
                    <Grid item>
                    <LinkedInIcon fontSize="large" />
                    </Grid>
                    <Grid>
                    <InstagramIcon fontSize="large" style={{ marginTop:'1em',marginBottom:'1em'}}/>
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
