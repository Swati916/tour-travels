import {HashRouter as Router, Routes, Route} from"react-router-dom";
import './App.css';
import Home from './Plans';
import Beaches from './Beaches';
import Hills from "./Hills";
import Splaces from "./Splaces"
import Adventures from "./Adventures"
import NavbarComponent from "./Navbar";
import About from "./About";
import Contact from "./Contact";

let App=() => {
  return (
    <div className="App">
      <NavbarComponent/>
      <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Hills" element={<Hills></Hills>}/>
        <Route path="/Beaches" element={<Beaches></Beaches>}/>
        <Route path="/Splaces" element={<Splaces></Splaces>}/>
        <Route path="/Adventures" element={<Adventures></Adventures>}/>
        <Route path="/About" element={<About></About>}/>
        <Route path="/Contact" element={<Contact></Contact>}/>
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;