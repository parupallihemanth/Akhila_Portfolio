import React, {useEffect} from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import amazon from '../Images/amazon.png';
import dal from '../Images/dal.jpg';
import manulife from '../Images/manulife.jpg';

import Aos from "aos"
import "aos/dist/aos.css"

const useStyles = makeStyles((theme) => ({

    experienceContainer : {
        background : '#0c2340',
        height : '100vh',
        
    },
    sectionTitle : {
       color : '#32CD32',
       fontWeight :'bold',
       fontFamily : 'roboto',
       marginLeft : '1.5em',
       marginTop : '2em',
       letterSpacing : '2px'
    },
    experinceTitle :{
      color : '#32CD32',
      fontWeight :'bold',
      fontFamily : 'roboto',
      marginLeft : '1.5em',
      marginTop : '2em',
      letterSpacing : '2px'
    },
    education : {
      color : '#FFFFF0',
      fontWeight :'bold',
      
      marginLeft : '1em',
      fontFamily : 'roboto',
      letterSpacing : '2px'
   },
   educationContainer : {
    marginTop : '2em',
   },
   educationItem : {
   
    marginLeft : '3em',
    
 },
    experinceCard : {
       borderRadius :'5px',
       
    }


}
    
));

function Experinces() {

  useEffect( () => {
    Aos.init({ duration: 1000})
}, [])

  const classes = useStyles();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchSM = useMediaQuery(theme.breakpoints.down("SM"));
  return (
    <Grid container className={ classes.experienceContainer} id="experience">
       <Grid item>
          <Typography className={classes.sectionTitle} variant="h5"> Education</Typography>
          <Grid data-aos="fade-right" container justify="center" className={classes.educationContainer}>
          <Grid item className={classes.educationItem}>
               <img src={dal} /> 
            </Grid>
            <Grid item>
            <Typography className={classes.education} variant="h5">Master of Internetworking, Full time</Typography> 
            <Typography className={classes.education} variant="h6">Dalhousie University, Halifax</Typography> 
            <Typography className={classes.education} variant="h6">January 2019 - July 2020</Typography> 
            </Grid>
          </Grid>
       </Grid>

       <Grid item>
          <Typography className={classes.experinceTitle} variant="h5">Experince</Typography>
          <Grid data-aos="fade-left" container className={classes.educationContainer}>
          <Grid item className={classes.educationItem}>
               <img src={dal} /> 
            </Grid>
            <Grid item>
            <Typography className={classes.education} variant="h5">Associate Business Analyst, Full time</Typography> 
            <Typography className={classes.education} variant="h6">Manulife, Halifax, Nova Scotia</Typography> 
            <Typography className={classes.education} variant="h6">November 2020 - Present</Typography> 
            </Grid>
          </Grid>

          <Grid data-aos="fade-left" container  className={classes.educationContainer}>
          <Grid item className={classes.educationItem}>
               <img src={dal} /> 
            </Grid>
            <Grid item>
            <Typography className={classes.education} variant="h5">Graduate Teaching Assistant, Part time</Typography> 
            <Typography className={classes.education} variant="h6">Dalhousie University, Halifax</Typography> 
            <Typography className={classes.education} variant="h6">January 2020 - March 2020</Typography> 
            </Grid>
          </Grid>
         
          <Grid data-aos="fade-left" container  className={classes.educationContainer}>
          <Grid item className={classes.educationItem}>
               <img src={dal} /> 
            </Grid>
            <Grid item>
            <Typography className={classes.education} variant="h5">Customer Service Representative, Full time</Typography> 
            <Typography className={classes.education} variant="h6">Amazon, India</Typography> 
            <Typography className={classes.education} variant="h6">January 2018 - December 2018</Typography> 
            </Grid>
          </Grid>
       </Grid>

       
    </Grid>
  );
}

export default Experinces;
