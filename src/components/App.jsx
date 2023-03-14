import React from "react";
import Login from "./Login";

var flag = false;

function check() {
  if (flag) {
    return <h1> HELLO</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{check()}</div>;
}

export default App;
