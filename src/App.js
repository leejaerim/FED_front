import logo from './logo.svg';

import Header from "./components/Header";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
