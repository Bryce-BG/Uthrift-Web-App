import React from 'react';
<<<<<<< HEAD
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

=======

export default class ITEM extends React.Component
{
  render() {
    return (
      <div className = "col-md-4">
          <a href="#">
            <img src={this.props.reference} alt=""/>
          </a>
          <h5 className="description">{this.props.description}</h5>
          <h4 className="price">${this.props.price}</h4>
          {/*<h3>{this.props.name}</h3>*/}
      </div>
>>>>>>> 989de6c727fc080bcbb195da3939fddca8c2ebb9
    )
  }
}
