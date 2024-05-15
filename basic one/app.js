/*
<div id='parent'> 
    <div id='child'>
        <h1></h1>
        <h2></h2>
    </div>
</div>

*/

// const heading  = React.createElement('h1',{id:'title',sample:'sample atr'},'wellcome to React');

const parent = React.createElement(
  "div",
  { id: parent },
  React.createElement("div", { id: child }, [
    React.createElement("h1", {}, "Hello I am h1"),
    React.createElement("h2", {}, "Hello I am h2"),
  ]) 
);
console.log("heading:", heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
