import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import {  JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import "./App.css";
import { Alert } from "antd";

import { Row, Col, Switch as SwitchD } from "antd";

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useUserAddress } from "eth-hooks";
import { useExchangePrice, useGasPrice, useUserProvider, useContractLoader, useContractReader, useEventListener, useBalance, useExternalContractLoader } from "./hooks";
import { Account, Contract, Faucet, Ramp, GasGauge } from "./components";
import { Footer } from "./layout";
import { Transactor } from "./helpers";
import { formatEther, parseEther } from "@ethersproject/units";
//import Hints from "./Hints";
import { Home, Create, Trusts, Assets, Terms, Privacy, Hints, ExampleUI, Subgraph } from "./views"
// import { useThemeSwitcher } from "react-css-theme-switcher";
import { INFURA_ID, DAI_ADDRESS, DAI_ABI, NETWORK, NETWORKS } from "./constants";

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ReactSVG } from 'react-svg'
import AzuloLogo from './assets/azulo_logo.svg';

/*
    Welcome to 🏗 azulo !

    Code:
    https://github.com/austintgriffith/azulo

    Support:
    https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA
    or DM @austingriffith on twitter or telegram

    You should get your own Infura.io ID and put it in `constants.js`
    (this is your connection to the main Ethereum network for ENS etc.)


    🌏 EXTERNAL CONTRACTS:
    You can also bring in contract artifacts in `constants.js`
    (and then use the `useExternalContractLoader()` hook!)
*/


/// 📡 What chain are your contracts deployed to?
const targetNetwork = NETWORKS['rinkeby']; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

// 😬 Sorry for all the console logging
const DEBUG = true


// 🛰 providers
if(DEBUG) console.log("📡 Connecting to Mainnet Ethereum");
// const mainnetProvider = getDefaultProvider("mainnet", { infura: INFURA_ID, etherscan: ETHERSCAN_KEY, quorum: 1 });
// const mainnetProvider = new InfuraProvider("mainnet",INFURA_ID);
//
// attempt to connect to our own scaffold eth rpc and if that fails fall back to infura...
const scaffoldEthProvider = new JsonRpcProvider("https://rpc.scaffoldeth.io:48544")
const mainnetInfura = new JsonRpcProvider("https://mainnet.infura.io/v3/" + INFURA_ID)
// ( ⚠️ Getting "failed to meet quorum" errors? Check your INFURA_I

// 🏠 Your local provider is usually pointed at your local blockchain
const localProviderUrl = targetNetwork.rpcUrl;
// as you deploy to other networks you can set REACT_APP_PROVIDER=https://dai.poa.network in packages/react-app/.env
const localProviderUrlFromEnv = process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : localProviderUrl;
if(DEBUG) console.log("🏠 Connecting to provider:", localProviderUrlFromEnv);
const localProvider = new JsonRpcProvider(localProviderUrlFromEnv);


// 🔭 block explorer URL
const blockExplorer = targetNetwork.blockExplorer;

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginTop: '20px',
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
    fontSize: '1em',
    color: '#000',
    fontWeight: 600
  },
  logo: {
    flexGrow: 1,
    '& a > div': {
        maxWidth: '140px',
    },
  },
  mainNav: {
    '& a': {
      color: '#000',
      margin: '0 12px',
      fontWeight: 600,
      '&:hover': {
        color: '#7131ff'
      },
    },
    '& a.main': {
      color: '#000',
      margin: '0 12px',
      fontWeight: 600,
      '&:hover': {
        color: '#7131ff'
      },
    },
  },
  mainButton: {
    borderRadius: '100px',
    border: '2px solid #7131FF',
    background: 'transparent',
    color: '#7131FF !important',
    padding: '12px 30px',
    fontSize: '1.1em',
    '&:hover': {
      border: '2px solid #000',
      background: '#000',
      color: '#fff !important'
    }
  },
  drawer: {
    width: '240px',
    flexShrink: 0,
  },
}));

function App(props) {

  const classes = useStyles();

  const mainnetProvider = (scaffoldEthProvider && scaffoldEthProvider._network) ? scaffoldEthProvider : mainnetInfura

  const [injectedProvider, setInjectedProvider] = useState();
  /* 💵 This hook will get the price of ETH from 🦄 Uniswap: */
  const price = useExchangePrice(targetNetwork,mainnetProvider);

  /* 🔥 This hook will get the price of Gas from ⛽️ EtherGasStation */
  const gasPrice = useGasPrice(targetNetwork,"fast");
  // Use your injected provider from 🦊 Metamask or if you don't have it then instantly generate a 🔥 burner wallet.
  const userProvider = useUserProvider(injectedProvider, localProvider);
  const address = useUserAddress(userProvider);

  // You can warn the user if you would like them to be on a specific network
  let localChainId = localProvider && localProvider._network && localProvider._network.chainId
  let selectedChainId = userProvider && userProvider._network && userProvider._network.chainId

  // For more hooks, check out 🔗eth-hooks at: https://www.npmjs.com/package/eth-hooks

  // The transactor wraps transactions and provides notificiations
  const tx = Transactor(userProvider, gasPrice)

  // Faucet Tx can be used to send funds from the faucet
  const faucetTx = Transactor(localProvider, gasPrice)

  // 🏗 azulo is full of handy hooks like this one to get your balance:
  const yourLocalBalance = useBalance(localProvider, address);

  // Just plug in different 🛰 providers to get your balance on different chains:
  const yourMainnetBalance = useBalance(mainnetProvider, address);

  // Load in your local 📝 contract and read a value from it:
  const readContracts = useContractLoader(localProvider)

  // If you want to make 🔐 write transactions to your contracts, use the userProvider:
  const writeContracts = useContractLoader(userProvider)

  // EXTERNAL CONTRACT EXAMPLE:
  //
  // If you want to bring in the mainnet DAI contract it would look like:
  const mainnetDAIContract = useExternalContractLoader(mainnetProvider, DAI_ADDRESS, DAI_ABI)

  // Then read your DAI balance like:
  const myMainnetDAIBalance = useContractReader({DAI: mainnetDAIContract},"DAI", "balanceOf",["0x34aA3F359A9D614239015126635CE7732c18fDF3"])

  // keep track of a variable from the contract in the local React state:
  const purpose = useContractReader(readContracts,"YourContract", "purpose")

  //📟 Listen for broadcast events
  const setPurposeEvents = useEventListener(readContracts, "YourContract", "SetPurpose", localProvider, 1);

  /*
  const addressFromENS = useResolveName(mainnetProvider, "austingriffith.eth");
  console.log("🏷 Resolved austingriffith.eth as:",addressFromENS)
  */

  //
  // ☝️ These effects will log your major set up and upcoming transferEvents- and balance changes
  //
  useEffect(()=>{
    if(DEBUG && mainnetProvider && address && selectedChainId && yourLocalBalance && yourMainnetBalance && readContracts && writeContracts && mainnetDAIContract){
      // console.log("_____________________________________ 🏗 azulo _____________________________________")
      // console.log("🌎 mainnetProvider",mainnetProvider)
      // console.log("🏠 localChainId",localChainId)
      // console.log("👩‍💼 selected address:",address)
      // console.log("🕵🏻‍♂️ selectedChainId:",selectedChainId)
      // console.log("💵 yourLocalBalance",yourLocalBalance?formatEther(yourLocalBalance):"...")
      // console.log("💵 yourMainnetBalance",yourMainnetBalance?formatEther(yourMainnetBalance):"...")
      // console.log("📝 readContracts",readContracts)
      // console.log("🌍 DAI contract on mainnet:",mainnetDAIContract)
      // console.log("🔐 writeContracts",writeContracts)
    }
  }, [mainnetProvider, address, selectedChainId, yourLocalBalance, yourMainnetBalance, readContracts, writeContracts, mainnetDAIContract])


  const [oldMainnetBalance, setOldMainnetDAIBalance] = useState(0)

  // For Master Branch Example
  const [oldPurposeEvents, setOldPurposeEvents] = useState([])

  // For Buyer-Lazy-Mint Branch Example
  // const [oldTransferEvents, setOldTransferEvents] = useState([])
  // const [oldBalance, setOldBalance] = useState(0)

  // Use this effect for often changing things like your balance and transfer events or contract-specific effects
  useEffect(()=>{
    if(DEBUG){
      if(myMainnetDAIBalance && !myMainnetDAIBalance.eq(oldMainnetBalance)){
        console.log("🥇 myMainnetDAIBalance:",myMainnetDAIBalance)
        setOldMainnetDAIBalance(myMainnetDAIBalance)
      }

      // For Buyer-Lazy-Mint Branch Example
      //if(transferEvents && oldTransferEvents !== transferEvents){
      //  console.log("📟 Transfer events:", transferEvents)
      //  setOldTransferEvents(transferEvents)
      //}
      //if(balance && !balance.eq(oldBalance)){
      //  console.log("🤗 balance:", balance)
      //  setOldBalance(balance)
      //}

      // For Master Branch Example
      if(setPurposeEvents && setPurposeEvents !== oldPurposeEvents){
        console.log("📟 SetPurpose events:",setPurposeEvents)
        setOldPurposeEvents(setPurposeEvents)
      }
    }
  }, [myMainnetDAIBalance]) // For Buyer-Lazy-Mint Branch: balance, transferEvents


  let networkDisplay = ""
  if(localChainId && selectedChainId && localChainId !== selectedChainId ){
    networkDisplay = (
      <div>
        <Alert
          message={"⚠️ Wrong Network"}
          description={(
            <div>
              You have <b>{NETWORK(selectedChainId).name}</b> selected and you need to be on <b>{NETWORK(localChainId).name}</b>.
            </div>
          )}
          type="error"
          closable={false}
        />
      </div>
    )
  }else{
    networkDisplay = (
      <div>
        Network: {targetNetwork.name}
      </div>
    )
  }

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new Web3Provider(provider));
  }, [setInjectedProvider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  const [route, setRoute] = useState();
  useEffect(() => {
    setRoute(window.location.pathname)
  }, [setRoute]);

  let faucetHint = ""
  const faucetAvailable = localProvider && localProvider.connection && targetNetwork.name === "localhost"

  const [ faucetClicked, setFaucetClicked ] = useState( false );
  if(!faucetClicked&&localProvider&&localProvider._network&&localProvider._network.chainId===31337&&yourLocalBalance&&formatEther(yourLocalBalance)<=0){
    faucetHint = (
      <div style={{padding:16}}>
        <Button type={"primary"} onClick={()=>{
          faucetTx({
            to: address,
            value: parseEther("0.01"),
          });
          setFaucetClicked(true)
        }}>
          Grab funds from the faucet
        </Button>
      </div>
    )
  }

  const accessMenu = [];
  let isAuthenticated = false;
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      isAuthenticated = true;
      accessMenu.push(
        <Link
          key="viewtrust"
          className={classes.accountBtn}
          onClick={()=>{setRoute("/assets")}} to="/assets"
        >
          View trust
        </Link>,
        <Link
          key="logoutbutton"
          className={classes.accountBtn}
          onClick={logoutOfWeb3Modal} to="#"
        >
          Logout
        </Link>
      );
    } else {
      isAuthenticated = false;
      accessMenu.push(
        <Link
          key="loginbutton"
          className={classes.accountBtn}
          /*type={minimized ? "default" : "primary"}     too many people just defaulting to MM and having a bad time*/
          onClick={loadWeb3Modal} to="/assets"
        >
          Access trust
        </Link>,
        <Link
          key="getstarted"
          className={classes.mainButton}
          to="/create"
        >
          Get started
        </Link>
      );
    }
  }

  // TODO: remove, dev only
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Container maxWidth="lg">
            <div className={classes.toolbar}>
              <div className={classes.logo}>
                <Link onClick={()=>{setRoute("/")}} to="/">
                  <ReactSVG src={AzuloLogo} />
                </Link>
              </div>
              <nav className={classes.mainNav}>
                {accessMenu}
              </nav>
            </div>
          </Container>
        </AppBar>

        <Switch>
          <Route exact path="/">
            {!isAuthenticated ? (
              <Home 
                loadWeb3Modal={loadWeb3Modal}
              />
            ) : (
              <Redirect to={
                `/trusts`
              } />
            )}
          </Route>
          <Route path="/create">
            {/* <ExampleUI
              address={address}
              userProvider={userProvider}
              mainnetProvider={mainnetProvider}
              localProvider={localProvider}
              yourLocalBalance={yourLocalBalance}
              price={price}
              tx={tx}
              writeContracts={writeContracts}
              readContracts={readContracts}
              purpose={purpose}
              setPurposeEvents={setPurposeEvents}
            /> */}
            <Create
              address={address}
              tx={tx}
              writeContracts={writeContracts}
            />
          </Route>
          <Route path="/trusts">
            {isAuthenticated ? (
              <Trusts />
            ) : (
              <Redirect to={
                `/`
              } />
            )}
          </Route>
          <Route path="/assets">
            {isAuthenticated ? (
              <Assets
                address={address}
              />
            ) : (
              <Redirect to={
                `/`
              } />
            )}
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/yourcontract">
            {/*
                🎛 this scaffolding is full of commonly used components
                this <Contract/> component will automatically parse your ABI
                and give you a form to interact with it locally
            */}

            <Contract
              name="YourContract"
              signer={userProvider.getSigner()}
              provider={localProvider}
              address={address}
              blockExplorer={blockExplorer}
            />


            { /* uncomment for a second contract:
            <Contract
              name="SecondContract"
              signer={userProvider.getSigner()}
              provider={localProvider}
              address={address}
              blockExplorer={blockExplorer}
            />
            */ }

            { /* Uncomment to display and interact with an external contract (DAI on mainnet):
            <Contract
              name="DAI"
              customContract={mainnetDAIContract}
              signer={userProvider.getSigner()}
              provider={mainnetProvider}
              address={address}
              blockExplorer={blockExplorer}
            />
            */ }
          </Route>
          <Route path="/hints">
            <Hints
              address={address}
              yourLocalBalance={yourLocalBalance}
              mainnetProvider={mainnetProvider}
              price={price}
            />
          </Route>
          <Route path="/exampleui">
            <ExampleUI
              address={address}
              userProvider={userProvider}
              mainnetProvider={mainnetProvider}
              localProvider={localProvider}
              yourLocalBalance={yourLocalBalance}
              price={price}
              tx={tx}
              writeContracts={writeContracts}
              readContracts={readContracts}
              purpose={purpose}
              setPurposeEvents={setPurposeEvents}
            />
          </Route>
          <Route path="/mainnetdai">
            <Contract
              name="DAI"
              customContract={mainnetDAIContract}
              signer={userProvider.getSigner()}
              provider={mainnetProvider}
              address={address}
              blockExplorer={"https://etherscan.io/"}
            />
          </Route>
          <Route path="/subgraph">
            <Subgraph
            subgraphUri={props.subgraphUri}
            tx={tx}
            writeContracts={writeContracts}
            mainnetProvider={mainnetProvider}
            />
          </Route>
        </Switch>
          
        <div style={{position: 'fixed', bottom: '10px', left: '50%', transform: 'translate(-50%, 0)'}}>
          <div onClick={handleDrawerOpen} style={{color: '#ccc', cursor: 'pointer'}}>[TOOLS]</div>
        </div>

        <Drawer anchor="right" className={classes.drawer} open={open} onBackdropClick={handleDrawerClose}>
          
          <div style={{position: 'absolute', top: '10px', left: '50%', transform: 'translate(-50%, 0)'}}>
            <div onClick={handleDrawerClose} style={{color: '#ccc', cursor: 'pointer'}}>[CLOSE]</div>
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
          <div>
            {networkDisplay}
          </div>
          {/* 🗺 Extra UI like gas price, eth price, faucet, and support: */}
          <div style={{ padding: 40 }}>
            <Row align="middle" gutter={[4, 4]}>
              <Col span={8}>
                <Ramp price={price} address={address} networks={NETWORKS}/>
              </Col>

              <Col span={8} style={{ textAlign: "center", opacity: 0.8 }}>
                <GasGauge gasPrice={gasPrice} />
              </Col>
              <Col span={8} style={{ textAlign: "center", opacity: 1 }}>
                <Button
                  onClick={() => {
                    window.open("https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA");
                  }}
                  size="large"
                  shape="round"
                >
                  <span style={{ marginRight: 8 }} role="img" aria-label="support">
                    💬
                  </span>
                  Support
                </Button>
              </Col>
              <Col span={24}>
                {

                  /*  if the local provider has a signer, let's show the faucet:  */
                  faucetAvailable ? (
                    <Faucet localProvider={localProvider} price={price} ensProvider={mainnetProvider}/>
                  ) : (
                    ""
                  )
                }
              </Col>
            </Row>
          </div>
          <div>
            <ul style={{ textAlign:"center" }}>
              <li>
                <Link onClick={()=>{setRoute("/")}} to="/">Home</Link>
              </li>
              <li>
                <Link onClick={()=>{setRoute("/yourcontract")}} to="/yourcontract">YourContract</Link>
              </li>
              <li>
                <Link onClick={()=>{setRoute("/hints")}} to="/hints">Hints</Link>
              </li>
              <li>
                <Link onClick={()=>{setRoute("/exampleui")}} to="/exampleui">ExampleUI</Link>
              </li>
              <li>
                <Link onClick={()=>{setRoute("/mainnetdai")}} to="/mainnetdai">Mainnet DAI</Link>
              </li>
              <li>
                <Link onClick={()=>{setRoute("/subgraph")}} to="/subgraph">Subgraph</Link>
              </li>
            </ul>
          </div>
          
        </Drawer>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


/*
  Web3 modal helps us "connect" external wallets:
*/
const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: INFURA_ID,
      },
    },
  },
});

const logoutOfWeb3Modal = async () => {
  await web3Modal.clearCachedProvider();
  setTimeout(() => {
    window.location.reload();
  }, 1);
};

 window.ethereum && window.ethereum.on('chainChanged', chainId => {
  setTimeout(() => {
    window.location.reload();
  }, 1);
})

export default App;
