import React from 'react';
import logo from '../img/logo.png';

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

export default Login;