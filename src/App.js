import React, { Component } from 'react';
import Homepage from './components/Homepage'; 
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Topbar from './components/Topbar';

class App extends Component {
  render() {
    return (
        <div>
          <Topbar />
        </div>
    );
  }
}

export default App;
