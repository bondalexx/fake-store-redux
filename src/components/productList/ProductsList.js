import React, { useEffect, useState,useMemo } from "react";
import {useHttp} from '../../hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from "../../actions";
import Product from "../product/Product";

import './productList.css';

const ProductList = ({ activeFilter }) => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    const { request } = useHttp();
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    const filtered = useMemo(() => {
      return products.filter(product => activeFilter === 'all' ? products : product.category === activeFilter);
    }, [activeFilter, products]);
  
    useEffect(() => {
      dispatch(fetchProducts(request));
    }, []);
  
    useEffect(() => {
      setFilteredProducts(filtered);
    }, [activeFilter, products]);
  
    console.log(activeFilter)

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