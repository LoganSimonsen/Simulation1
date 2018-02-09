import React, { Component } from 'react';


class BinButton extends Component {
    render() {
      return (
        <div>
            <button className="Bin-Button">
                Bin 1
            </button>
            <button className="Bin-Button">
                Bin 2
            </button>
            <button className="Bin-Button">
                Bin 3
            </button>
            <button className="Bin-Button">
                Bin 4
            </button>
            <button className="Add-Button">
                + Add Inventory
            </button>
        </div>
      );
    }
  }
  
  export default BinButton;