import React, { Component }  from 'react';



// import components 

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Main from './components/Main';
import Ouracademy from './components/Ouracademy';
import Statistics from './components/Statistics';
import Imagegallery from './components/Imagegallery';
import Footer from './components/Footer';

function App() {

  let projectDetails = {
    "name" : "Sporting de Kerala"
  }


  return (
    <>
    <Header />
    <Home />
    <About projectDetails={projectDetails}/>
    <Statistics projectDetails={projectDetails}/>
    <Ouracademy />
    <Imagegallery projectDetails={projectDetails}/>
    <Footer />
    {/* <Main /> */}
    </>
  );
}

export default App;
