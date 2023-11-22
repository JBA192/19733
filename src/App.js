import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navigation from './Navigation/Navigation';
import { Grid } from 'semantic-ui-react';
import NodeDistribution from './Data Metrics/NodeDistribution';

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
          <NodeDistribution />
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
