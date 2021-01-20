import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NotesPage from "./screens/NotesPage";
import EditNotePage from "./screens/EditNotePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NotesPage />
          </Route>
          <Route path="/edit">
            <EditNotePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
