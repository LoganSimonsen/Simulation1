import React, { Component } from 'react';
import ShelfB from './components/Headers/ShelfB'
import ShelfHeader from './components/Headers/ShelfHeader';
import { Link } from 'react-router-dom';

class ShelfBPage extends Component {
    render() {
      return (
        <div className='App'>
        <Link to='./'><ShelfHeader /></Link>
           <ShelfB />
           <Link to='./ShelfBbin1'><button className="Bin-Button">
           Bin 1
       </button></Link>
       <Link to='./ShelfBbin2'><button className="Bin-Button">
           Bin 2
       </button></Link>
       <Link to='./ShelfBbin3'><button className="Bin-Button">
           Bin 3
       </button></Link>
       <Link to='./ShelfBbin4'><button className="Bin-Button">
           Bin 4
       </button></Link>
        </div>
      );
    }
  }
  
  export default ShelfBPage;