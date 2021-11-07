import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
// import Signup from './components/SignupForm';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import Admin from './components/Admin';
import Logout from './components/Logout';



class App extends Component {
  render(){
  return (
    <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route  path="/admin" component={Admin}/>
      <Route  path="/logout" component={Logout}/>
      <Route  path="/signupform" component={SignupForm}/> 
    </Switch>
    </BrowserRouter>
    
    </div>
  );
}
}

export default App;
