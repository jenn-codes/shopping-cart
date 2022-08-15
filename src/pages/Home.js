import React from "react"; 
import { Link } from 'react-router-dom'

const Home = () => {


    return (
        <div className="home">
            <h1>Welcome to Jenn's Jewels</h1>
            <div className="welcome">
            <p>Offering the highest quality jewels in the NYC metropolitan area since 1990, Jenn's Jewels is proud to bring our exquisite pieces to the online community. Looking for a simple pair of gold earrings or a statement necklace for that special occasion? We have it all. Check out our selection today!</p>
            <Link to="/shop"><button className="button" type="button">Start shopping</button></Link>
            </div>
        </div>
    )
}

export default Home