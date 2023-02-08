import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';


export default function App() {
  return (
    <div className='App'>
        <Navbar />
        <Home />
    </div>
  );
}

