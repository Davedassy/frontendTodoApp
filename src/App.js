import React from 'react';
import './App.css';
import "./fontawesome/js/all";
import "./fontawesome/css/all.css"
import {Switch,Route} from "react-router-dom"
import LogIn from './components/LogIn';
import Register from "./components/Register"
import LogOut from './components/LogOut';
import User from './components/User';



function App() {
  return (
       <Switch>
           <Route exact path="/" component={LogIn} />
           <Route exact path="/register" component={Register} />
           <Route exact path="/logout" component={LogOut} />
           <Route exact path="/user" component={User} />
       </Switch>
  );
}

export default App;
