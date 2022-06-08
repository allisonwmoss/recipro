import './App.css';
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import RecipesList from './components/RecipesList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="btn btn-dark">get started</div>
      <RecipesList />
    </div>
  );
}

export default App;
