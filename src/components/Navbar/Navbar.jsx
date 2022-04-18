import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping, faCartFlatbed, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from '../../Assests/logo.png'
import "./navbar.css";
import JSON from '../../Data/MOCK_DATA.json'
import styled from 'styled-components'

const Image = styled.img`
  width: 100px;
  height: 45px;
  margin: 10px 20px;

  @media (max-width: 700px) {
    width: 50px;
    height: 22px;
  }

`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        <NavLink aria-current="page" to="/">
          <Image src={logo} alt="logo" />
        </NavLink>
      </span>

      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink aria-current="page" to="/categories">Categories</NavLink>
        <NavLink aria-current="page" to="/brand">Brand</NavLink>
        <NavLink aria-current="page" to="/new">New</NavLink>
      </div>
      <div className="search">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="nav-icons flex justify-between">
        <NavLink aria-current="page" to="/createaccount"> <FontAwesomeIcon icon={faUser} /></NavLink>
        <NavLink aria-current="page" to="/bag"><FontAwesomeIcon icon={faBagShopping} /></NavLink>
        <NavLink aria-current="page" to="/cart"><FontAwesomeIcon icon={faCartFlatbed} /></NavLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div >
  );
};

export default Navbar;