import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShelfA extends Component {
    render() {
      return (
        <div className="Shelf-A">
        <Link to="/ShelfAPage" style={{ textDecoration: 'none', color: 'white' }}>SHELF A</Link>
        </div>
      );
    }
  }
  
  export default ShelfA;