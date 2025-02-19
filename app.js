import React from "react";
import ReactDOM from "react-dom/client"


/**
 * header
 *  - logo
 *  - nav items
 * body
 *  - search bar
 *  - Restaurant container
 *       - Restaurant card
 *          -img
 *          -name of res
 *          -cuisine
 *          -star rating
 *          -distance
 * footer
 *   - copyright
 *   - links
 *   - address
 *   - contact
 */
const Header = () => {
    return (
        <div className="header">
            <div className = "logo-container">
                <img 
                className="logo"
                src="https://logopond.com/logos/f4e0c01dd59f50febbc133ac7a019011.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard= () => {
    return(
        <div className="res-card">
            <h3>Diner2Door</h3>
        </div>
    );
};

const Body = () =>{
    return (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
        <RestaurantCard/>
        </div>
    </div>
    );
};

const AppLayout = () => {
    return (
        <div className = "app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);