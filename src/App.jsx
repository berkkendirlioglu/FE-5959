import React from 'react'
import NavBar from './sections/navbar/navbar.jsx';
import Header from './sections/hero/header.jsx';
import Feature from './sections/features/features.jsx';
import Footer from './sections/footer/footer.jsx';
import './style.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

function App() {

  return (
    <>
      <NavBar />
      <Header />
      <Feature />
      <Footer />
    </>
  );
}

export default App
