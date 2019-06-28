import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Login extends React.Component{
  render(){
    return(
      <div className="div-signin">
        <form class="form-signin shadow">
        <h1 class=" text-center h1-login">LOGIN</h1>
        <img src={logo}width="150"></img>
        <label htmlFor="inputUsername" class="sr-only">Username</label>
        <input type="text" className="form-control" placeholder="Username"></input>
        <label htmlFor="inputPassword" class="sr-only">Password</label>
        <input type="password" className="form-control" placeholder="Password"></input>
        <button type="submit" className="btn btn-lg btn-block btn-big-pink">Log In</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2019 Nadhifa Beauty Care</p>
      </form>
      </div> 
    );
  }
}

class Main extends React.Component{
  render(){
    return(
      <div>
        <h1>Welcome,</h1>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
<Login></Login>
      </div>
      
    );
  }
}

export default App;
