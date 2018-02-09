import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShelfC extends Component {
    render() {
      return (
        <div className="Shelf-A">
        <Link to="/ShelfCPage" style={{ textDecoration: 'none', color: 'white' }}>SHELF C</Link>
            
        </div>
      );
    }
  }
  
  export default ShelfC;