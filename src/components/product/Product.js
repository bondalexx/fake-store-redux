import React from "react";

import './product.css';

const Product = (props) => {

    return(
        <div className="product">
      <img className="product-img" src={props.img} alt="Product 1" />
      <div className="cont">
        <h2>{props.title}</h2>
        <p>{props.category}</p>
        <p>{props.price}$</p>
      </div>
    </div>
    )
}

export default Product;