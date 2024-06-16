import logo from "./logo.svg";
import './App.css';
import Home from "./project/Home";
import Services from "./project/Services";
import HIT6 from "./project/HIT6";
import NPHQ from "./project/NPHQ";
import Login from "./project/Login";
import {Routes,Route} from 'react-router-dom';
import Mainhome from "./project/Mainhome";
function App() {
  return (
 <>
        <Home />
        <Routes>
          <Route  exact path="/" element={<Mainhome />}/>
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/HIT6" element={<HIT6 />} />
          <Route exact path="/NPHQ" element={<NPHQ />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
  </>
  );
}

export default App;
