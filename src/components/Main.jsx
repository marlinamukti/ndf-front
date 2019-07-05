import React from 'react'; // always import this
import './Main.css';

class Main extends React.Component{ // create component
    render(){ // at least provide render() function that return a html element
      return(
        <div>
          <h1>Welcome,</h1>
          <div className="div-menubar">
            <button type="button" className="btn btn-big-pink dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              User
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item">Role</button>
              <button className="dropdown-item">Employee</button>
            </div>
          </div>
          <div className="div-menubar">
            <button type="button" className="btn btn-big-pink dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Customer
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item">Customer</button>
              <button className="dropdown-item">Member</button>
            </div>
          </div>
          <div className="div-menubar">
            <button type="button" className="btn btn-big-pink">
              Store
            </button>
          </div>
        </div>
      );
    }
}

export default Main; // always import