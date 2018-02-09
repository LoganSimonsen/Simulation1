import React, { Component } from 'react';
import ShelfC from './components/Headers/ShelfC'
import ShelfHeader from './components/Headers/ShelfHeader';
import { Link } from 'react-router-dom';

class ShelfCPage extends Component {
    render() {
      return (
        <div className='App'>
        <Link to='./'><ShelfHeader /></Link>
           <ShelfC />
           <Link to='./ShelfCbin1'><button className="Bin-Button">
           Bin 1
       </button></Link>
       <Link to='./ShelfCbin2'><button className="Bin-Button">
           Bin 2
       </button></Link>
       <Link to='./ShelfCbin3'><button className="Bin-Button">
           Bin 3
       </button></Link>
       <Link to='./ShelfCbin4'><button className="Bin-Button">
           Bin 4
       </button></Link>
        </div>
      );
    }
  }
  
  export default ShelfCPage;