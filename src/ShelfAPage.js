import React, { Component } from 'react';
import ShelfA from './components/Headers/ShelfA'
import ShelfHeader from './components/Headers/ShelfHeader';
import BinButtons from './components/Buttons/BinButton';
import { Link } from 'react-router-dom';

class ShelfAPage extends Component {
    render() {
      return (
        <div className='App'>
        <Link to='./'><ShelfHeader /></Link>
           <ShelfA />
           <Link to='./ShelfAbin1'><button className="Bin-Button">
                Bin 1
            </button></Link>
            <Link to='./ShelfAbin2'><button className="Bin-Button">
                Bin 2
            </button></Link>
            <Link to='./ShelfAbin3'><button className="Bin-Button">
                Bin 3
            </button></Link>
            <Link to='./ShelfAbin4'><button className="Bin-Button">
                Bin 4
            </button></Link>
        </div>
      );
    }
  }
  
  export default ShelfAPage;