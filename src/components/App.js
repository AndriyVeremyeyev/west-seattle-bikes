import React from 'react';
import StoreController from './StoreController';
import {BrowserRouter as Router} from 'react-router-dom';
// import Header from './header-footer/Header';
// import Footer from './header-footer/Footer';

function App() {
  return (
    <div className='container'>
      <Router>
        {/* <Header/> */}
        <StoreController/>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
