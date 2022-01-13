import React from 'react';
import './../../src/App.css';
import Heading from "./Heading";
import Navbar from './Navbar';
import Gallery from './Gallery';

import TheLatest from './TheLatest';
import LatestArticles from './LatestArticles';

// import LatestStories from './LatestStories';
import Footer from './Footer';

 function Home() {
    return (
        <>
        <div className='container'>
          <Heading/>
          <Navbar/>
          <Gallery/>
          <TheLatest/>
          <LatestArticles/>
         
          {/* <LatestStories/> */}
          </div>
          <Footer/>
        </>
    )
}
export default Home;