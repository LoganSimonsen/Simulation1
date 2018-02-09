import React, { Component } from 'react';
import HomeHeader from './components/Headers/HomeHeader';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
      return (
        <div>
            <HomeHeader />
            <Link to='./ShelfAPage'><button className='Home-buttons' >
               Shelf A
            </button></Link>
            <Link to='./ShelfBPage'><button className='Home-buttons' >
              Shelf B
            </button></Link>
            <Link to='./ShelfCPage'><button className='Home-buttons' >
              Shelf C
            </button></Link>
            <Link to='./ShelfDPage'><button className='Home-buttons' >
              Shelf D
            </button></Link>

        </div>
      );
    }
  }
  
  export default Home;