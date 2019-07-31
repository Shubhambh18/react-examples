import React from 'react';

import Header from './Header/Header.react';
import Footer from './Footer/Footer.react';
import './App.css';
import Navigation from './Navigation/Navigation.react';



function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Header/> */}
      {/* <Content request={request}></Content> */}
      
      {/* <Footer/>
      </BrowserRouter> */}
      <Header></Header>
      <Navigation></Navigation>
      <Footer></Footer>
    </div>
  );
}

export default App;

