import './App.css';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header";
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom'
import All from './components/All';
import Tech from './components/Tech';
import Politics from './components/Politics';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import Sport from './components/Sport';




function App() {
  return (
    <div className="container">
    <Header />
      <Nav />
    <Routes>
      <Route path='/' element={<All/>} />
      <Route path='/all' element={<All/>} />
      <Route path='/tech' element={<Tech />   } />
      <Route path='/politics' element={<Politics />} />
      <Route path='/entertainment' element={<Entertainment />} />
      <Route path='/health' element={<Health />} />
      <Route path='/sport' element={<Sport />} /> 
    </Routes>
    </div>
  );
}

export default App;
