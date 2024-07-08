// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// heading is an object created by createElement

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

// If we want to create sibling elements we have to write it inside an array

/*

In order to create this below structure we have to write above code

<div id="parent">
   <div id="child1">
      <h1>I am an h1 tag</h1>
      <h2>I am an h2 tag</h2>
   </div>
   <div id="child2">
      <h1>I am an h1 tag</h1>
      <h2>I am an h2 tag</h2>
   </div>
</div>

*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
