const parent = React.createElement( //creating React object => html(to browser understands)
    'div',
    {id:'parent'},
    [React.createElement(
        'div',
        {id:'child'},
        [React.createElement('h1',{},"this is h1 tag"),React.createElement('h2',{},"this is h2 tag"),React.createElement('h3',{},"this is h3 tag")]
    ),
    React.createElement(
        'div',
        {id:'child2'},
        [React.createElement('h1',{},"this is h1 tag"),React.createElement('h2',{},"this is h2 tag"),React.createElement('h3',{},"this is h3 tag")]
    )]
);

// const heading = React.createElement("h1",
//     {id:"heading"},
//     "Welcome To REACT!"); //creating h1 tag inside react 
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root')); //created root using ReactDOM library - this is doing to connect browser with react, as we know DOM is a bridge b/w react and browser
root.render(parent);