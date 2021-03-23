import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";

import TopBar from "./components/TopBar";
import NotesPage from "./screens/NotesPage";
import RickAndMorty from "./screens/RickAndMorty";

const queryClient = new QueryClient();

function App() {
  const [currentApp, setCurrentApp] = React.useState("rick&morty");

  function handleChangeApp() {
    if (currentApp === "rick&morty") setCurrentApp("notes");
    else setCurrentApp("rick&morty");
  }

  return (
    <QueryClientProvider client={queryClient}>
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
              <RickAndMorty />
            )}
          </TopBar>
        </Router>
      </div>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
