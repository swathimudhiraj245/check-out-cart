import React from 'react'
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Cards from './Components/Cards';
import CardsDetails from './Components/CardsDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/cart/:id' element={<CardsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
