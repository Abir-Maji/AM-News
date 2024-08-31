import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { NewsBoard } from './Components/NewsBoard';
import { NewsItem } from './Components/NewsItem';
import Footer from './Components/Footer';
import {Toi} from './Components/Toi'; // Import the TOI component
import {Bbc} from './Components/Bbc';
import {Indiatv} from './Components/Indiatv';
import {Abp} from './Components/Abp';
import { Timesnow } from './Components/Timesnow';
import { Ndtv } from './Components/Ndtv';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Toi" element={<Toi />} />
        <Route path="/Bbc" element={<Bbc />} />        
        <Route path="/Indiatv" element={<Indiatv />} />
        <Route path="/Abp" element={<Abp />} />
        <Route path="/Timesnow" element={<Timesnow />} />
        <Route path="/Ndtv" element={<Ndtv />} />
      </Routes>
      <NewsItem />
      <Footer />
    </Router>
  );
}

export default App;
