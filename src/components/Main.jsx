import React from 'react';

class Main extends React.Component{
    render(){
      return(
        <div>
          <h1>Welcome,</h1>
          <div class="btn-group">
            <button type="button" class="btn btn-big-pink dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              User
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-big-pink dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Customer
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
        </div>
      );
    }
}

export default Main;