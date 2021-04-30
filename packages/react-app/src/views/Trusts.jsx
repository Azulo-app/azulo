import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { mainStyles } from '../layout/PageStyles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CustomIcons from '../assets/icons';

const useStyles = makeStyles((theme) => ({
  pageDesc: {
    fontSize: '1em',
    lineHeight: '1.6'
  },
  trustsHold: {
    marginTop: '20px'
  },
  trustItem: {
    background: 'transparent',
    border: '1px solid #7131FF',
    borderRadius: '8px',
    padding: '30px 40px',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      background: '#f5f2fb',
      border: '1px solid #7131FF',
      '& $trustItemTitle': {
        color: '#7131FF'
      }
    }
  },
  trustItemTitle: {
    fontSize: '1.2em',
    color: '#7131FF',
    transition: 'all 0.3s ease-in-out',
    fontWeight: 600
  },
  trustItemAdd: {
    border: '1px solid #dedede',
    '& $trustItemTitle': {
      color: '#adabab'
    }
  }
}));

export default function Trusts({address}) {
  const mainClasses = mainStyles();
  const classes = useStyles();

  return (
      <div className={mainClasses.root}>
          <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" component="main" className={mainClasses.pageContent}>
            <Grid container alignItems="center" className={mainClasses.pageNav}>
              <Grid item md={12}>
                <Link
                  className={mainClasses.innerNav}
                  to="#"
                >
                  Manage trusts
                </Link>
                <Link
                  to="/assets"
                >
                  Trust assets
                </Link>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item md={12}>
                <Grid container alignItems="center">
                  <Grid item className={mainClasses.pageTitleHold}><div className={mainClasses.pageTitle}>Trusts</div></Grid>
                  <Grid item><div className={mainClasses.pageDesc}>View, manage and create Trusts</div></Grid>
                </Grid>
                <Grid spacing={3} container alignItems="flex-start" className={classes.trustsHold}>
                  <Grid xs={12} sm={6} md={4} item>
                    <Grid container alignItems="flex-start">
                      <Link to="/create" className={`${classes.trustItem} ${classes.trustItemAdd}`}>
                        <Grid container justify="space-between" alignItems="stretch">
                          <Grid item className={classes.trustItemTitle}>
                            Create new trust
                          </Grid>
                          <Grid item className={classes.trustItemIcon}>
                            <CustomIcons.AddIcon style={{ color: "#7131ff", width: '14px', height: '14px' }} />
                          </Grid>
                        </Grid>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      </div>
  );
}