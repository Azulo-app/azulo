import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ReactSVG } from 'react-svg';
import AzuloIcon from '../assets/azulo_icon.svg';
import { ThemeSwitch } from "../components";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(3),
    },
  },
  holder: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '1px',
      background: '#eeeeee'
    }
  },
  links: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignContent: 'stretch',
    alignItems: 'center'
  },
  link: {
    margin: theme.spacing(1, 1.5),
    lineHeight: 1,
    fontSize: '0.9em',
    color: '#000',
    '&:hover': {
        color: '#7131ff'
    },
  },
  logo: {
    marginRight: '20px',
    '& a > div': {
        maxWidth: '28px',
        width: '28px'
    },
  },
  copy: {
    lineHeight: 2,
    fontSize: '0.9em'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
        <div className={classes.holder}>
            <Grid container>
              <Grid item>
                <div className={classes.logo}>
                  <Link to="/">
                      <ReactSVG src={AzuloIcon} />
                  </Link>
                </div>
              </Grid>
              <Grid item className={classes.links}>
                <nav>
                  <Link variant="button" color="textPrimary" to="/terms" className={classes.link} rel="noopener noreferrer" target="_blank">
                      Terms
                  </Link>
                  <Link variant="button" color="textPrimary" to="/privacy" className={classes.link} rel="noopener noreferrer" target="_blank">
                      Privacy
                  </Link>
                </nav>
              </Grid>
              <Grid item style={{'marginRight': '15px'}}>
                <Typography className={classes.copy}>
                  {'Copyright © '}
                  <Link to="/">
                      Azulo
                  </Link>{' '}
                  {new Date().getFullYear()}
                  {'.'}
                </Typography>
              </Grid>
              <Grid item>
                <ThemeSwitch />
              </Grid>
            </Grid>
        </div>
    </Container>
  );
}