import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navigation from './Navigation/Navigation';

function App() {
  const [activeMenu, setActiveMenu] =  useState("");
  
console.log(activeMenu)
  return (
    <div className="App">
      <Navigation />
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
     

    </div>
  );
}

export default App;
