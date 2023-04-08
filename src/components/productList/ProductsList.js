import React, { useEffect, useState,useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from "./prodcutsSlice";
import Product from "../product/Product";

import './productList.css';

const ProductList = ({ activeFilter }) => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    const filtered = useMemo(() => {
      return products.filter(product => activeFilter === 'all' ? products : product.category === activeFilter);
    }, [activeFilter, products]);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
  
    useEffect(() => {
      setFilteredProducts(filtered);
    }, [activeFilter, products]);

    console.log(filtered)

    const elements = filteredProducts.map(product => {
      return (
        <Product key={product.id} img={product.image} id={product.id} name={product.title} title={product.title} price={product.price} 
        description={product.description} category={product.category}/>
      )
    });
  
    return (
      <div className="product-list">
        {elements}
      </div>
    )
  }

export default ProductList;