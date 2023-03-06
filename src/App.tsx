import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import FavoritePages from './pages/FavoritePages';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/favorite' element={ <FavoritePages /> } />
      <Route />
    </Routes>
    </>
  );
}

export default App;
