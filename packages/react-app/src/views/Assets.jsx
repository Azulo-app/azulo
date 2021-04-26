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
    fontSize: '3em',
    lineHeight: '1.6'
  },
}));

export default function Assets({address}) {
  const mainClasses = mainStyles();
  const classes = useStyles();

  const [zapperBalances, setZapperBalances] = useState()

  // TODO: This is a public Zapper API - Do we need a dedicated?
  let _zapperBalancesURI = address ? 'https://api.zapper.fi/v1/protocols/tokens/balances?addresses[]='+address+'&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241' : ''

  useEffect(() => {
    const getTokenList = async () => {
      try {
      let _zapperBalances = await fetch(_zapperBalancesURI)
      let zapperBalancesJson = await zapperBalances.json()
      console.log('zapperBalances', zapperBalances);
      console.log('zapperBalancesJson', zapperBalancesJson);
      setZapperBalances(zapperBalancesJson);
      // let filteredTokens = tokenListJson.tokens.filter(function (t) {
      //   return t.chainId === activeChainId
      // })
      // let ethToken = WETH[activeChainId]
      // ethToken.name = 'Ethereum'
      // ethToken.symbol = 'ETH'
      // ethToken.logoURI = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
      // let _tokenList = [ethToken, ...filteredTokens]
      // setTokenList(_tokenList)
      // let _tokens = tokenListToObject(_tokenList)
      // setTokens(_tokens)
    } catch (e) {
      console.log(e)
    }
    }
    getTokenList()
  }, [_zapperBalancesURI])

  return (
      <div className={mainClasses.root}>
          <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" component="main" className={mainClasses.pageContent}>
            <Grid container alignItems="center" className={mainClasses.pageNav}>
              <Grid item md={12}>
                <Link
                  to="/trusts"
                >
                  Manage trusts
                </Link>
                <Link
                  className={mainClasses.innerNav}
                  to="#"
                >
                  Trust assets
                </Link>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item md={12}>
                <Grid container alignItems="center">
                  <Grid item className={mainClasses.pageTitleHold}><div className={mainClasses.pageTitle}>Assets</div></Grid>
                  <Grid item><div className={mainClasses.pageDesc}>All your trust assets</div></Grid>
                </Grid>
                <div className={classes.pageDesc}>All your trust assets</div>
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