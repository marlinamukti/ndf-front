import React from 'react';
import logo from '../img/logo.png';

class Login extends React.Component{
    render(){
      return(
        <div className="div-signin">
          <form className="form-signin shadow text-center">
          <h1 className=" text-center h1-login">LOGIN</h1>
          <img src={logo} width="150" className="text-center"></img>
          <label htmlFor="inputUsername" className="sr-only">Username</label>
          <input type="text" className="form-control" placeholder="Username"></input>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" className="form-control" placeholder="Password"></input>
          <button type="submit" className="btn btn-lg btn-block btn-big-pink">Log In</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2019 </p>
        </form>
        </div> 
      );
    }
}

export default Login;