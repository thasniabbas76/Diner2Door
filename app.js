import React from "react";
import ReactDOM from "react-dom/client"

//JSX React
//JSX ==> React.creatElement is JS object = HTMLElement(render)
const Title = () => ( 
    <h1 className="head">
    Hi, React using JSX
    </h1>
);// its written in jsx, the output are same for both core react and jsx


const numelement = 50000 //we can add any javascript code in JSX using {} in component section

//React Components
//React functional components - normal javascript function
//Syntax Option 1:
const HeadingComponent = () => (
    <div id="component">
        <Title />
        {numelement}
        <h1 className="heading"> React Functional component </h1>
    </div>
);
//Syntax Option 2:
// const HeadingComponent = () => <h1 className="heading">React Funstional component</h2>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);