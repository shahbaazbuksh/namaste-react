import React from "react";
import ReactDOM from "react-dom/client";

function HeadingComponent() {
  return <h1 id="container">Namaste React from Component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
