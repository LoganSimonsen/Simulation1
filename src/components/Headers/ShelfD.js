import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShelfD extends Component {
    render() {
      return (
        <div className="Shelf-A">
        <Link to="/ShelfDPage" style={{ textDecoration: 'none', color: 'white' }}>SHELF D</Link>
            
        </div>
      );
    }
  }
  
  export default ShelfD;