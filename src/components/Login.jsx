import React from 'react';
import logo from '../img/logo.png';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleLoginButton = (event) => {
        console.log(`logging in with '${this.state.username}' and '${this.state.password}'`);
    }

    render() {
        return(
            <div className="div-signin">
                <div className="form-signin shadow text-center">
                    <h1 className=" text-center h1-login">LOGIN</h1>
                    <img src={logo} width="150" className="text-center" alt="logo should be here"></img>

                    <label htmlFor="inputUsername" className="sr-only">Username</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="username" value={this.state.username} onChange={this.handleUsernameChange}></input>
                    
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" 
                    className="form-control" 
                    placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                    
                    <button type="submit" className="btn btn-lg btn-block btn-big-pink" onClick={this.handleLoginButton}>Log In</button>
                    
                    <p className="mt-5 mb-3 text-muted">&copy; 2019 </p>
                    <p>{this.props.user.token}</p>
                </div>
            </div> 
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Login);