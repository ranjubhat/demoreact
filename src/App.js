import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import QueryString from "./components/QueryString";
import ContextParent from "./components/ContextParent";
import ReduxExample from "./components/ReduxExample";
function App() {
  let array1 = [10, 20, 30, 40];
  console.log("SPLICE return", array1.splice(0, 2)); // Returns [10,20]
  console.log("original array after splice", array1); //Splice changes the parent array ==> [30,40]
  let array2 = [50, 60, 70, 80];
  console.log("SLICE return==>", array2.slice(0, 2)); //Returns [50,60]
  console.log("original array after SLICE", array2); //Slice does not change the original array  ==> [50,60,70,80]
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={App}/> */}
        <Route path="/" exact component={Home} />
        <Route path="/about/:id" component={About} />
        <Route path="/account" component={QueryString} />
        <Route path="/context" component={ContextParent} />
        <Route path="/redux" component={ReduxExample} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
