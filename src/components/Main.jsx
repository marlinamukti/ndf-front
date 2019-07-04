import React from 'react'; // always import this

class Main extends React.Component{ // create component
    render(){ // at least provide render() function that return a html element
      return(
        <div>
          <h1>Welcome,</h1>
          <div className="btn-group">
            <button type="button" className="btn btn-big-pink dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              User
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item">Action</button>
              <button className="dropdown-item">Another action</button>
              <button className="dropdown-item">Something else here</button>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item">Separated link</button>
            </div>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-big-pink dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Customer
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item">Action</button>
              <button className="dropdown-item">Another action</button>
              <button className="dropdown-item">Something else here</button>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item">Separated link</button>
            </div>
          </div>
        </div>
      );
    }
}

export default Main; // always import