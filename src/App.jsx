import './App.css';
import React, { useState } from 'react';
import Header from './layouts/header/Header';
import Button from './components/basic/button/Button';
import NavMobile from './layouts/navMobile/NavMobile.jsx';
import Wrapper from './components/wrapper/Wrapper.jsx';

function App() {
  const [className, setClass] = useState("nav-mobile");

  function openMenu() {
    setClass("nav-mobile active");
  }

  function closeMenu() {
    setClass("nav-mobile");
  }

  return (
    <div className="App">
      <Header openMenu={openMenu}/>
      <NavMobile className={className} closeMenu={closeMenu} />
      <Wrapper />
    </div>
  );
}

export default App;