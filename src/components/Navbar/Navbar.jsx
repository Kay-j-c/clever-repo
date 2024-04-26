import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  
    const [menu, setMenu] = useState("menu");

    return (
      <div className='navbar'>
        <img src={assets.logo} alt="" className="logo"/>
        <ul className="navbar-menu">
            <li className={menu === "home" ? "active" : ""}>
                <Link to="/" onClick={() => setMenu("home")}>Home</Link>
            </li>
            <li className={menu === "about" ? "active" : ""}>
                <Link to="/about" onClick={() => setMenu("about")}>About</Link>
            </li>
        </ul>
        <div className="navbar-right">
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
      </div>
    )
}

export default Navbar;
