import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Users from "./components/containers/users/Users";
import UserDetail from "./components/containers/users/UserDetail"; 

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/users/:id" component={UserDetail} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
