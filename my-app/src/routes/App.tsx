import React from 'react';
import logo from '../logo.svg';
import NavBar from '../components/NavBar'
import '../style/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import Home from './Home';
import Photos from './Photos'
import Profile from './Profile'
import { FC } from "react";

export const App: FC = () => {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

       
     
        
      </header>
    </div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
