import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BeerPage from "./BeerPage";
import Test from "./Test";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={BeerPage} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;
