import React, { useEffect, useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Account } from "../components";
import { ReactSVG } from 'react-svg'
import AzuloLogo from '../assets/azulo_logo.svg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginTop: '10px',
    backgroundColor: 'transparent',
  },
  toolbar: {
    flexWrap: 'wrap',
    display: 'flex',
    position: 'relative',
    alignItems: 'center'
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize: '1.1em'
  },
  mainButton: {
    borderRadius: '100px',
    border: '2px solid #7131FF',
    background: '#fff',
    color: '#7131FF',
    padding: '12px 30px',
    fontSize: '1.1em',
    '&:hover': {
      border: '2px solid #000',
      background: '#000',
      color: '#fff'
    }
  },
  logo: {
    flexGrow: 1,
    '& a > div': {
        maxWidth: '140px',
    },
  },
}));

export default function Header({
  networkDisplay,
  address,
  localProvider,
  userProvider,
  mainnetProvider,
  price,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  faucetHint
}) {
  const classes = useStyles();

  const [route, setRoute] = useState();
  useEffect(() => {
    setRoute(window.location.pathname)
  }, [setRoute]);

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Container maxWidth="lg">
            <div className={classes.toolbar}>
                <div className={classes.logo}>
                    <Link onClick={()=>{setRoute("/")}} to="/">
                        <ReactSVG src={AzuloLogo} />
                    </Link>
                </div>
                
                <div>
                  {networkDisplay}
                </div>
                <div>
                  <div>
                    <Account
                      address={address}
                      localProvider={localProvider}
                      userProvider={userProvider}
                      mainnetProvider={mainnetProvider}
                      price={price}
                      web3Modal={web3Modal}
                      loadWeb3Modal={loadWeb3Modal}
                      logoutOfWeb3Modal={logoutOfWeb3Modal}
                      blockExplorer={blockExplorer}
                    />
                    {faucetHint}
                  </div>
                </div>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Access trust
                    </Link>
                    <Link variant="button" color="textPrimary" onClick={()=>{setRoute("/assets")}} to="/assets" className={classes.link}>
                        Assets
                    </Link>
                </nav>
                <Button href="#" color="primary" variant="outlined" className={classes.mainButton}>
                    Get started
                </Button>
            </div>
        </Container>
    </AppBar>
  );
}