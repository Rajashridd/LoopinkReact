import './App.css';
import Header from './Components/Header/Header';
import Homeapp from './Components/Homeapp';
import Aboutus from './Components/Headpages/Aboutus';
import Contactus from './Components/Headpages/Contactus';
import Servicebyus from './Components/Headpages/Servicebyus';
import Healthcareto from './Components/Headpages/Healthcareto';
import Financeto from './Components/Headpages/Financeto';
import Travelto from './Components/Headpages/Travelto';
import { Routes,Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    
    <>
         <Header/>
         
    <Routes>
      <Route path="/" element={<Homeapp/>} />
      <Route path="/service" element={<Servicebyus/>} />
      <Route path="/about" element={<Aboutus/>} />
      <Route path="/contact" element={<Contactus/>} />
      <Route path="/health" element={<Healthcareto/>} />
      <Route path="/finance" element={<Financeto/>} />
      <Route path="/travel" element={<Travelto/>} />
    </Routes>

     <Footer/>
    </>
  );
} 

export default App;