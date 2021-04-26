import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
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
                  <Grid item><div className={mainClasses.pageDesc}>Your Trusts</div></Grid>
                </Grid>
                <div>
                  <ul>
                    {/* {zapperBalances.length > 0 &&
                      zapperBalances.map(balances => (
                      <li>{balances.meta}</li>
                    ))} */}
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      </div>
  );
}