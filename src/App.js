import logo from './logo.svg';

import Header from "./components/Header";
import React from "react";
import Home_tab from "./components/Tab";

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Home_tab linkList={['company','stack']}></Home_tab>
    </div>
  );
}

export default App;
