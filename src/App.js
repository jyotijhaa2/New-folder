
import './App.css';
import React from 'react';
// import Heading from './Components/Heading';
// import Navbar from './Components/Navbar';
// import Gallery from './Components/Gallery';
// import Footer from './Components/Footer';
// import TheLatest from './Components/TheLatest';
// import LatestArticles from './Components/LatestArticles';
// import LatestStories from './Components/LatestStories';
// import secondPage from './Components/SecondPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import { Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Page2 from './Components/SecondPage';
import Page3 from './Components/ThirdPage';




function App() {
  return (
    <> <Router> 

           <div className='container'>
              <Routes>

              <Route  path="/" element={<Home />} />

              <Route  exact path="/SecondPage" element={<Page2 />} />

              <Route exact path="/ThirdPage" element={<Page3 />} />
              


              </Routes>
            </div>
    </Router>
         
    </>
  );
}

export default App;
