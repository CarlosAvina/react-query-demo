import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import TopBar from "./components/TopBar";
import NotesPage from "./screens/NotesPage";

function App() {
  const [currentApp, setCurrentApp] = React.useState("notes");

  function handleChangeApp() {
    if (currentApp === "rick&morty") setCurrentApp("notes");
    else setCurrentApp("rick&morty");
  }

  return (
    <div className="App">
      <Router>
        <TopBar currentApp={currentApp} onChangeApp={handleChangeApp}>
          {currentApp === "notes" ? (
            <Switch>
              <Route exact path="/">
                <NotesPage />
              </Route>
            </Switch>
          ) : (
            <h1>Rick and morty app :D</h1>
          )}
        </TopBar>
      </Router>
    </div>
  );
}

export default App;
