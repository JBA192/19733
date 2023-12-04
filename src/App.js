import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navigation from './Navigation/Navigation';
import { Grid } from 'semantic-ui-react';
import NodeDistribution from './Data Metrics/NodeDistribution';
import Clients from './Data Metrics/Clients';
import Governance from './Data Metrics/Governance';
import HashRate from './Data Metrics/HashRate';
import Binance from './CryptoCurrencies/Binance';
import Bitcoin from './CryptoCurrencies/Bitcoin';
import Ethereum from './CryptoCurrencies/Ethereum';
import Solana from './CryptoCurrencies/Solana';
import Dogecoin from './CryptoCurrencies/Dogecoin';
import ExchangeTradingShare from './Data Metrics/ExchangeTradingShare';
import ClientType from './Data Metrics/ClientType';
import About from './Navigation/About';
import Consensus from './Data Metrics/Consensus';
import OS from './Data Metrics/OS';

function App() {
  const [activeMenu, setActiveMenu] = useState("about");

  return (
    <div style={style.background}>
      <Navigation activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Grid centered columns={2}>
        <Grid.Column width={2}>
          <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </Grid.Column>
        <Grid.Column width={13}>
          {activeMenu === "about" && <About />}
          {activeMenu === "hashRate" && <HashRate />}
          {activeMenu === "network" && <NodeDistribution />}
          {activeMenu === "clients" && <Clients />}
          {activeMenu === "governance" && <Governance />}
          {activeMenu === "binance" && <Binance />}
          {activeMenu === "bitcoin" && <Bitcoin />}
          {activeMenu === "ethereum" && <Ethereum />}
          {activeMenu === "solana" && <Solana />}
          {activeMenu === "dogecoin" && <Dogecoin />}
          {activeMenu === "application" && <ExchangeTradingShare />}
          {activeMenu === "clientType" && <ClientType />}
          {activeMenu === "consensus" && <Consensus />}
          {activeMenu === "os" && <OS />}
        </Grid.Column>
        <Grid.Column width={2}/>
        <Grid.Column width={13} textAlign='center'>
          {activeMenu === 'paper' && <><img style={style.qr} alt="link to paper qr-code" src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.overleaf.com%2Fread%2Fcwxymgxgqqvz%23065146&chs=180x180&choe=UTF-8&chld=L|2" /></>}
        </Grid.Column>
      </Grid>

    </div>
  );
}

const style = {
  background: {
    backgroundColor: "rgba(0,0,0,0.04)"
  },
  qr: {
    margin: "10% 0 15% 0",
    width: "400px",
    height: "400px"
  }
}

export default App;
