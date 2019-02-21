import React from 'react';
import './App.css';
import CustomHeader from './components/header';
import ProductList from './components/productsListComponent';


const App = () => {
  return (
    <div className="App">
      <CustomHeader/>
      <div className="main-class">
        <ProductList/>
      </div>
    </div>
  );
} 

export default App;
