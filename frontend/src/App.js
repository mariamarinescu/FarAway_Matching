import React from "react";
import NavBar from "./components/navbar/Navbar.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/'

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/profile/Profile.component";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Welcome from './components/Welcome.component';
import Home from './components/home/Home.component';
import Card from './components/Card.component';




const  App = ()  => {

  return (
    <div className="App">
      <Router history={history}>
      <Welcome/>
        <header>
          <NavBar />
        </header>
        <Switch>
        <Route path="/home" component={Home} />

          <Route path="/" exact component={Home}/>
          <Route path="/profile" component={Profile} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
    
        </Switch>

      </Router>
    </div>
  );
}

export default App;