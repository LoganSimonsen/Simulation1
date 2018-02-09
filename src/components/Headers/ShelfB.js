import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShelfB extends Component {
    render() {
      return (
        <div className="Shelf-A">
        <Link to="/ShelfBPage" style={{ textDecoration: 'none', color: 'white' }}>SHELF B</Link>
            
        </div>
      );
    }
  }
  
  export default ShelfB;