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
    constructor(props) {
        super(props);
        this.state = {
            storename: ''
        }
    }

    handleAddStore = () => {
        let index = this.props.stores.length + 1;
        this.props.addStore({ id: index, storename: this.state.storename });
        this.clearField();
    }

    clearField() {
        this.setState({
            storename: ''
        });
    }

    handleInputChange = (event) => {
        this.setState({
            storename: event.target.value
        });
    }

    render() {
        return(
            <div>
                <h2>ReduxTestEnv</h2>
                <input type="text" onChange={this.handleInputChange} value={this.state.storename}></input>
                <button onClick={this.handleAddStore}>Add New Store</button>
                <Stores stores={this.props.stores} />
            </div>
        );
    }
}

// export default ReduxTestEnv;
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTestEnv);