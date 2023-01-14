import React from "react";
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
/* Add ToastContainer Notification */
import "react-toastify/dist/ReactToastify.css";
import './App.css';

import Home from './Home';
import AboutUs from './AboutUs';
import Addhome from './Addhome';
import HomesToSell from './HomesToSell';
import EditHomesToSell from './EditHomesToSell';

function App() {
  return (
    <Router>

      {/* <ToastContainer/> */}

      <Routes>
        
        {/* Home*/}
        <Route path='/' element={<Home/>}/>
        {/* AboutUs*/}
        <Route path='/AboutUs' element={<AboutUs/>}/>
        {/* Addhome*/}
        <Route path='/Addhome' element={<Addhome/>}/>
        {/* ToSell*/}
        <Route path='/HomesToSell' element={<HomesToSell/>}/>
        {/* EditHomes*/}
        <Route path='/EditHomesToSell' element={<EditHomesToSell/>}/>
        </Routes> 
    </Router>
  );
  }

export default App;
