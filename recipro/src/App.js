//dependencies
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

//components
import RecipesContainer from './components/RecipesContainer';
import Header from './components/Header';
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/generate" element={<RecipesContainer />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;


//a home page with the header and "get started" button
//a /start page with 
//a form for adding recipes to your recipe book
  //do we want to be able to delete and modify them too? yes
