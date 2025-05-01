import {Route, Routes} from"react-router-dom";
import './App.css';
import Home from './Plans';
import Beaches from './Beaches';
import Hills from "./Hills";
import Splaces from "./Splaces"
import Adventures from "./Adventures"
import NavbarComponent from "./Navbar";
import Know from "./Know";
import Last from "./Last";

let App=() => {
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Hills" element={<Hills></Hills>}/>
        <Route path="/Beaches" element={<Beaches></Beaches>}/>
        <Route path="/Splaces" element={<Splaces></Splaces>}/>
        <Route path="/Adventures" element={<Adventures></Adventures>}/>
        <Route path="/Know" element={<Know></Know>}/>
        <Route path="/Last" element={<Last></Last>}/>
      </Routes>
    </div>
    
  );
}

export default App;