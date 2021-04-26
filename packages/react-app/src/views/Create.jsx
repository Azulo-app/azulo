import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { mainStyles } from '../layout/PageStyles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ReactSVG } from 'react-svg';
import BGCurve from '../assets/bg_curve_2.svg';
import FamilyTrustImg from '../assets/family_trust.svg';
import ICBooks from '../assets/ic_books.svg';

const useStyles = makeStyles((theme) => ({
  pageDesc: {
    fontSize: '1em',
    lineHeight: '1.6'
  },
}));

export default function Create() {
  const mainClasses = mainStyles();
  const classes = useStyles();

  return (
      <div className={classes.root}>
          <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" component="main" className={classes.pageContent}>
            <Grid container alignItems="center">
              <Grid item md={12}>
                <Grid container md={12} alignItems="center">
                  <Grid item className={mainClasses.pageTitleHold}><div className={mainClasses.pageTitle}>Create Trusts</div></Grid>
                  <Grid item><div className={mainClasses.pageDesc}>Create your trust</div></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      </div>
  );
}