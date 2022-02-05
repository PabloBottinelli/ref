import './App.css';
import NavBar from './components/NavBar/NavBar';
import IndexContainer from './components/IndexContainer/IndexContainer';
import ListContainer from './components/ListContainer/ListContainer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<IndexContainer/>}/>
          <Route path='/referidos' element={<ListContainer/>}/>
          <Route path='/descuentos' element={<ListContainer/>}/>
          <Route path='/becas' element={<ListContainer/>}/>
          <Route path='/hacks' element={<ListContainer/>}/>
          {/* <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/detail/:paramId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

