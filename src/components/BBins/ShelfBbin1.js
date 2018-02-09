import React, { Component } from 'react';
import ShelfB from '../../components/Headers/ShelfB';
import ShelfHeader from '../../components/Headers/ShelfHeader';
import { Link } from 'react-router-dom';

class ShelfBbin1 extends Component {
    render() {
      return (
        <div className='App'>
        <Link to='./'><ShelfHeader /></Link>
           <ShelfB/>
           <div className='BinHeader'>Bin 1</div>
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
  
  export default ShelfBbin1;