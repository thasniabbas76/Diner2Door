import React from "react";
import ReactDOM from "react-dom/client"


//React.creatElement ==> ReactElement is JS object = HTMLElemet(render)
const heading = React.createElement(  //Its core react 
    "h1",
    {id:"heading"},
    "Hi React");

//JSX React

//JSX ==> React.creatElement is JS object = HTMLElement(render)
const jsxheading = <h1>HI, React using JSX</h1> // its written in jsx, the output are same for both core react and jsx


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);