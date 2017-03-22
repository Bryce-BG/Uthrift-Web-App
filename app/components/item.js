import React from 'react';
import NAVBAR from './navbar.js';
import ITEMHERO from './itemhero.js';
import MOREITEMS from './moreitems.js';


export default class ITEM extends React.Component {
  render() {
    return (
      <div>
        <NAVBAR  />
        <ITEMHERO name="i>clicker" itembigpic="img/dummy-item-main.jpg"/>
        <MOREITEMS itemscat="Related Products"/>
        <MOREITEMS itemscat="More by Seller"/>



      </div>

    )
  }
}
