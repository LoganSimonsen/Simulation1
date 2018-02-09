import React, { Component } from 'react';
import logo from '../../logo.png';

class HomeHeader extends Component {
    render() {
      return (
        <div className="App-header" style={{paddingRight: 250}}>
            <img className="App-logo" src={logo} alt='img missing'></img><b id='shelfieWord'> SHELFIE</b>
        </div>
      );
    }
  }
  
  export default HomeHeader;