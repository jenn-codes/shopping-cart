import React from "react"; 
import '../App'
import { Link } from "react-router-dom";

const Header = ({cartLength}) => {



    return (
        <div className="header">
            <div className="logo">LOGO</div>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart: {cartLength} </Link>
            </div>
        </div>
    )
}

export default Header;