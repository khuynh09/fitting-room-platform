import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainNavbar from "./Components/Standard/MainNavBar.js"
import Home from "./Pages/Home"

function App() {
  return (
      <Router>
        <div className="App">
          <MainNavbar />

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/discover" component={Home}/>
              </Switch>

        </div>
        </Router>

    
  );
}

export default App;
