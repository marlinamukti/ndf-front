import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
import UserInfo from './UserInfo';

class ProtectedPage extends React.Component {
    render() {
        return (
        <React.Fragment>
            <h2>Protected Page</h2><br />
            <UserInfo />
        </React.Fragment>
        );
    }
}

class LoginTestEnv extends React.Component {
    
    isLoggedIn() { // function to chec user is authenticated
        if (this.props.user.isAuthenticated) {
          return <Route path='/' component={ProtectedPage} />
        } else {
          return <Redirect to='/login' />
        }
    }

    render() {
        return(
            <Router>
                {this.isLoggedIn()}
                <Route path='/login' component={Login} />
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(LoginTestEnv);