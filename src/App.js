import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navigation from './Navigation/Navigation';
import { Grid } from 'semantic-ui-react';
import NodeDistribution from './Data Metrics/NodeDistribution';
import Clients from './Data Metrics/Clients';
import Governance from './Data Metrics/Governance';
import HashRate from './Data Metrics/HashRate';
import MiningPools from './Data Metrics/MiningPools';
import Binance from './CryptoCurrencies/Binance';
import Bitcoin from './CryptoCurrencies/Bitcoin';
import Ethereum from './CryptoCurrencies/Ethereum';
import Solana from './CryptoCurrencies/Solana';
import Dogecoin from './CryptoCurrencies/Dogecoin';
import ExchangeTradingShare from './Data Metrics/ExchangeTradingShare';

function App() {
  const [activeMenu, setActiveMenu] = useState("about");

  return (
    <div style={style.background}>
      <Navigation activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <Grid centered columns={2}>
        <Grid.Column width={2}>
          <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </Grid.Column>
        <Grid.Column width={13}>
          {activeMenu === "hashRate" && <HashRate />}
          {activeMenu === "nodeDistribution" && <NodeDistribution />}
          {activeMenu === "miningPools" && <MiningPools />}
          {activeMenu === "clients" && <Clients />}
          {activeMenu === "governance" && <Governance />}
          {activeMenu === "binance" && <Binance />}
          {activeMenu === "bitcoin" && <Bitcoin />}
          {activeMenu === "ethereum" && <Ethereum />}
          {activeMenu === "solana" && <Solana />}
          {activeMenu === "dogecoin" && <Dogecoin />}
          {activeMenu === "exchangeShare" && <ExchangeTradingShare />}
        </Grid.Column>
      </Grid>

    </div>
  );
}

const style = {
  background: {
    backgroundColor: "rgba(0,0,0,0.04)"
  }
}

export default App;
