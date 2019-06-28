import React from 'react';
import logo from './img/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Login extends React.Component{
  render(){
    return(
      <div className="div-signin">
        <form class="form-signin shadow text-center">
        <h1 class=" text-center h1-login">LOGIN</h1>
        <img src={logo} width="150" class="text-center"></img>
        <label htmlFor="inputUsername" class="sr-only">Username</label>
        <input type="text" className="form-control" placeholder="Username"></input>
        <label htmlFor="inputPassword" class="sr-only">Password</label>
        <input type="password" className="form-control" placeholder="Password"></input>
        <button type="submit" className="btn btn-lg btn-block btn-big-pink">Log In</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2019 </p>
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
        <div class="btn-group">
          <button type="button" class="btn btn-big-pink dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            User
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
        <div class="btn-group">
          <button type="button" class="btn btn-big-pink dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Customer
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Main></Main>
      </div>
      
    );
  }
}

export default App;
