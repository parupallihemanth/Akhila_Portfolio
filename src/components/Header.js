import React, {useEffect} from 'react';
import Lottie from 'react-lottie';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import main1 from '../Images/main2.png'
import Hello from '../Animations/21903-online-class-animation.json'

import Aos from "aos"
import "aos/dist/aos.css"

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';   
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles( (theme) => ({

    headerContainer : {
       
        background : '#0c2340',
        marginTop : '4em',
        height : '400px',
        // [ theme.breakpoints.down('xs')] :{
        //     height :'200px'
        // },
        overflow : 'visible',
        // width : '100%'
    },
    headerText :{
        marginLeft :'1em',
        marginTop : '1em',
        color : '#fff',
        letterSpacing : '2px',
        
       },

       socialContainer : {
        
        marginTop : '0em'
       },

       socialIcon : {
        color : '#fff',
        marginLeft :'1.5em',
        marginTop : '1em',
        fontSize:'2.5em', 
        [ theme.breakpoints.down('md')] :{
            marginLeft :'1em'
        },
        [ theme.breakpoints.down('xs')] :{
            marginLeft :'0.5em'
        }
       },

       

    // mainImage :{
    //     marginTop : '6em',
    //     borderRadius : '15px',
    //    boxShadow: '0 3px 10px rgba(0,0,0,0.5)',
    //     [theme.breakpoints.down("md")] : {
    //         marginTop : '5em',
    //         // marginLeft : 'em'
    //     },
    //     [theme.breakpoints.down("sm")] : {
    //         marginTop : '0em',
    //         marginLeft : '4em'
    //     }
       
    //  }

}))

function Header() {

    const classes = useStyles();
    const theme = useTheme();
    const matchMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchXS = useMediaQuery(theme.breakpoints.down("xs"))

    useEffect( () => {
            Aos.init({ duration: 2000})
    }, [])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Hello,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <Grid data-aos="fade-down" container  className={classes.headerContainer} direction={ matchMD ? "row" : "column"} justify="space-between"   id="about" >
            
            <Grid item >
                <Typography  variant= { matchXS ? "h5" : "h2" } className={classes.headerText}>Hello, I'm <br />Akhila Sri Garikapati.</Typography>
                <LinkedInIcon  className={classes.socialIcon}/>
                <YouTubeIcon  className={classes.socialIcon}/>
                <InstagramIcon className={classes.socialIcon}/>
                <FacebookIcon  className={classes.socialIcon}/>
            </Grid>
            
            <Grid item >
            <Lottie options={defaultOptions}  height={ matchXS ? 200 : 400} width={400}  />
            </Grid>
            

        </Grid>
        
    )
}

export default Header
