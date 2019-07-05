import React from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../redux/actions';

class UserInfo extends React.Component {
    render() {
        return (
            <React.Fragment>user data {this.props.user.token} <button onClick={() => this.props.userLogout({})}>Logout</button></React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userLogout: user => dispatch(userLogout(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);