import React from "react"; 
import '../App'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";




const Header = ({cartLength}) => {



    return (
        <div className="header">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className="nav">
                <Link to="/"><span>HOME</span></Link>
                <Link to="/shop"><span>SHOP</span></Link>
                <Link to="/cart"><img className="cart-image" src={cart} alt="logo" /><span> {cartLength} </span> </Link>
            </div>
        </div>
    )
}

export default Header;