import './App.css';
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import RecipesList from './components/RecipesList';

function App() {
  return (
    <div className="App">
      <h1>Recipro</h1>
      <h2>Meal planning, oh-so-simplified.</h2>
      <div className="btn btn-dark">get started</div>
      <RecipesList />
    </div>
  );
}

export default App;
