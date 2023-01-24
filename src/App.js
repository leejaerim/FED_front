import logo from './logo.svg';

import Header from "./components/Header";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
