import React from 'react';
import logo from './logo.svg';
import Header from './Header/Header.react';
import Footer from './Footer/Footer.react';
import './App.css';
import abpos from './img1.jpg';
import Content from './Content/Content.react';


const request={
  bloodGroup:'opos',
  requireUnit:'12',
  location:'Chennai',
  imgRef:abpos
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content request={request}></Content>
      <Footer/>
    </div>
  );
}

export default App;
