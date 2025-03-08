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
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
        <img
        className="res-logo" 
        alt="res-logo" 
        src="https://img.freepik.com/free-photo/meat-burger-with-french-fries-side-view_141793-2771.jpg?semt=ais_hybrid"
        />
        <h4 style={{color:"white"}}>Paragon Restaurant</h4>
        <h6>Biriyani, NorthIndian, Asian, Chinese</h6>
        <h6>4.4 stars</h6>
        <h6>38 minutes</h6>
        </div>
    );
};

const Body = () =>{
    return (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
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