import React, {useState} from 'react';

import ProductList from './components/productList/ProductsList';
import Navbar from './components/navbar/Navbar';

import './App.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className='main-body'>
      <Navbar activeFilter={activeFilter} onFilterClick={handleFilterClick} />
      <ProductList activeFilter={activeFilter} />
    </div>
  );
}

export default App;
