import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Promise from './components/Promise';
import Purpose from './components/Purpose';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Promise />
      <Purpose /> 
      <Footer />

      </>
  );
}

export default App;