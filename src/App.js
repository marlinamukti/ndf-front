import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Main from './components/Main'; // this is how to import component
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends React.Component {
  render() {
    return (
      <div>
        <Main></Main>
      </div>
      
    );
  }
}

export default App;
