import React from "react";

import './navbar.css';

const Navbar = ({ activeFilter, onFilterClick }) => {  

  return(
  <ul className="navbar">
     <li
        className={activeFilter === "all" ? "active" : ""}
        onClick={() => onFilterClick("all")}
      >
        All
      </li>
      <li
        className={activeFilter === "electronics" ? "active" : ""}
        onClick={() => onFilterClick("electronics")}
      >
        Electronics
      </li>
      <li
        className={activeFilter === "jewelery" ? "active" : ""}
        onClick={() => onFilterClick("jewelery")}
      >
        Jewelery
      </li>
      <li
        className={activeFilter === "men's clothing" ? "active" : ""}
        onClick={() => onFilterClick("men's clothing")}
      >
        Men's Clothing
      </li>
      <li
        className={activeFilter === "women's clothing" ? "active" : ""}
        onClick={() => onFilterClick("women's clothing")}
      >
        Women's Clothing
      </li>
  </ul>
);
}

export default Navbar;