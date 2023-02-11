import React from 'react';
import logo from './HackStormlogo.png';
import connectwalletbutton from './ConnectWalletButton.png';
import Applogo from './components/Applogo';
import Connectwalletbutton from './components/Connectwalletbutton';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hackathon from "./components/Hackathon";
import Event from "./components/Event";

function Navbar({ logo, connectwalletbutton }) {
  return (
    <>
      <Applogo img={logo} />
      <Connectwalletbutton img={connectwalletbutton} />
    </>
  );
}

function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar 
            logo={logo}
            connectwalletbutton={connectwalletbutton}
          />
          <Routes>
            <Route path={`/`} element={<Hackathon />} />
            <Route path={`/event/`} element={<Event />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;