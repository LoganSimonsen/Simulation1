import React, { Component } from 'react';
import ShelfD from './components/Headers/ShelfD'
import ShelfHeader from './components/Headers/ShelfHeader';
import { Link } from 'react-router-dom';

class ShelfDPage extends Component {
    render() {
      return (
        <div className='App'>
        <Link to='./'><ShelfHeader /></Link>
           <ShelfD />
           <Link to='./ShelfDbin1'><button className="Bin-Button">
           Bin 1
       </button></Link>
       <Link to='./ShelfDbin2'><button className="Bin-Button">
           Bin 2
       </button></Link>
       <Link to='./ShelfDbin3'><button className="Bin-Button">
           Bin 3
       </button></Link>
       <Link to='./ShelfDbin4'><button className="Bin-Button">
           Bin 4
       </button></Link>
        </div>
      );
    }
  }
  
  export default ShelfDPage;