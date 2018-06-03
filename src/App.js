import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import CreateForm from './components/CreateForm';
import './App.css';

class App extends Component {
  state = {
    creatures: []
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <div className="menu-options">
            <ul>
              <li><Link to="/create">Create New Monster</Link></li>
              <li><Link to="/saved">Saved Monsters</Link></li>
            </ul>
          </div>
        )} />

        <Route exact path="/create" render={() => (
          <CreateForm />
        )} />

        <Route exact path="/saved" render={() => (
          <div className="saved-form">
          </div>
        )} />
      </div>
    );
  }
}

export default App;
