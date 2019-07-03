import React from 'react';
import { connect } from 'react-redux';
import { addStore } from '../../redux/actions';

// debug only
import store from '../../redux/reduxStore';
window.store = store;
// debug only

class Store extends React.Component {
    render() {
        return(
            <li>{this.props.storename}</li>
        );
    }
}

class Stores extends React.Component {
    render() {
        const { stores } = this.props;

        return(
            <ul>
                {stores.map(store => <Store key={store.id} storename={store.storename} />)}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        stores: state.stores
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addStore: store => dispatch(addStore(store))
    };
}

class ReduxTestEnv extends React.Component {
    render() {
        return(
            <div>
                <h2>ReduxTestEnv</h2>
                <Stores stores={this.props.stores} />
                <button onClick={this.handleAddStore}>Add New Store</button>
            </div>
        );
    }
}

// export default ReduxTestEnv;
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTestEnv);