import React, { Component } from 'react';
import ShelfA from '../../components/Headers/ShelfA';
import ShelfHeader from '../../components/Headers/ShelfHeader';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ShelfAbin1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }
  componentWillMount(){
    axios.get('http://localhost:3001/api/Item').then(response => {
        console.log(response);
  });
}





    render() {
      const { ItemAirboks } = this.state;
      return (
        <div className='App'>
        <Link to='./'><ShelfHeader /></Link>
           <ShelfA />
           <div className='BinHeader'>Bin 1</div>
           <form className='binForm' action="/action_page.php">
              Name:<br></br>
              <input type="text" name="Name" value="Airbok Sneakers"></input>
              <br></br>
              Price:<br></br>
              <input type="text" name="Price" value="200.50"></input>
              <br></br>
              <input type="submit" value="Edit"></input>
            </form> 

            {ItemAirboks}
        </div>
      );
    }
  }
  
  export default ShelfAbin1;