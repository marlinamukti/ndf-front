import React from 'react';

class Main extends React.Component{
    render(){
      return(
        <div>
          <h1>Welcome,</h1>
          <div className="btn-group">
            <button type="button" className="btn btn-big-pink dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              User
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-big-pink dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Customer
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
        </div>
      );
    }
}

export default Main;