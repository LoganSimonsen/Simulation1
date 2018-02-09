import React, { Component } from 'react';
import ShelfC from '../../components/Headers/ShelfC';
import ShelfHeader from '../../components/Headers/ShelfHeader';
import { Link } from 'react-router-dom';

class ShelfCbin2 extends Component {
    render() {
      return (
        <div className='App'>
        <Link to='./'><ShelfHeader /></Link>
           <ShelfC/>
           <div className='BinHeader'>Bin 2</div>
           <form  action="/action_page.php">
              Name:<br></br>
              <input type="text" name="Name" value="Airbok Sneakers"></input>
              <br></br>
              Price:<br></br>
              <input type="text" name="Price" value="200.50"></input>
              <br></br>
              <input type="submit" value="Edit" value="Delete"></input>
            </form> 
        </div>
      );
    }
  }
  
  export default ShelfCbin2;