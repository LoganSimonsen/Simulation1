import React, { Component } from 'react';
import './App.css';
import HomeHeader from './components/Headers/HomeHeader';
import ShelfHeader from './components/Headers/ShelfHeader';
import ShelfA from './components/Headers/ShelfA';
import { Link } from 'react-router-dom';
import routes from './routes';
import BinButton from './components/Buttons/BinButton';
import Home from './Home';
import ShelfAPage from './ShelfAPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      { routes }

      </div>
    );
  }
}

export default App;
