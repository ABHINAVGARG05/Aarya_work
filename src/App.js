import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import CompetitionsList from './components/pages/Events/CompetitionsList';
import CompetitionDetails from './components/pages/Events/CompetitionDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events/Competitions" element={<CompetitionsList />} />
          <Route path="/Events/Competitions/Events/Competitions/:id" element={<CompetitionDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
