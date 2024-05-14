import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Route, Routes, useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import Home from './components/remove/home';
// import LogIn from './components/remove/login';
import Eth from './components/eth';
// import History from './components/remove/history';
function App() {

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Eth/>} />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
