import './App.css';
import React, { Component } from 'react';
import { Route, Link, Routes } from 'react-router-dom';

import Login from '../src/pages/Login';
import Main from '../src/pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<Main />} />
        {/* <Link to="/home">Go to Main</Link> */}
      </Routes>
    </div>
  );
}

export default App;
