import React,{ useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-scroll";
import useMediaQuery from '@material-ui/core/useMediaQuery'
const useStyles = makeStyles((theme) =>({

    appbar :{
        background : '#0c2340',
        height : '4em'
    },
    logo : {
        padding : '1em',
        letterSpacing : '3px',
        fontWeight : '900',
        fontfamily: 'Roboto', 
        color : 'black'
    },
    tabsContainer :{
        marginLeft :'auto',
        [ theme.breakpoints.down('md')] :{
            marginLeft :'0'
        },
        [ theme.breakpoints.down('xs')] :{
            marginLeft :'-1.5em'
        }
        
    },
    tab : {
        textTransform : 'none',
        fontSize : '1.25em',
        fontWeight : 'bold',
        color : '#fff',
        minWidth : '30px',
        marginLeft : '3em',
        [ theme.breakpoints.down('xs')] :{
            marginLeft : '0',
        },
        "&:hover" :{
            borderBottom : '2px solid #fff'
        }
    }


}))

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const matchMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))

    const [ value, setValue ] = useState(0);

    return (
        <AppBar position="fixed" className={ classes.appbar} >
        <Toolbar variant="dense" >
          {/* <Typography variant="h5" className={ classes.logo}>AKHILA.</Typography> */}
          <Tabs
            
            className={classes.tabsContainer}
            indicatorColor="primary"
            textColor="primary"
            
            aria-label="disabled tabs example"
      >

        
        <Tab index={0} className={classes.tab} component={Link} to="about" spy={true} smooth={true}  offset={0}  duration={1000} label="About" disableRipple />
        <Tab index={1} className={classes.tab} component={Link} to="experience" spy={true} smooth={true}  offset={-30}  duration={1000} label="Experience" disableRipple />
        <Tab index={2} className={classes.tab} component={Link} to="contact" spy={true} smooth={true}  offset={0}  duration={800} label="Contact" disableRipple />
      </Tabs>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar
