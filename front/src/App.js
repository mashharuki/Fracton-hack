
import logo from './HackStormlogo.png';
import connectwalletbutton from './ConnectWalletButton.png';
import Applogo from './conponents/Applogo';
import Connectwalletbutton from './Connectwalletbutton';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hackathon from "./components/Hackathon";
import Event from "./components/Event";

function App() {
  return (
    <>
        <BrowserRouter>
          <Applogo 
              img={logo}
            />
          <Connectwalletbutton
            img={connectwalletbutton}
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
