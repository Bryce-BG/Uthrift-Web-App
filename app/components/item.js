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

        <div className="container content-contain">


            <div className="row">

                <div className="col-md-12">
                    <h3 className="page-header more-items">More by Seller</h3>
                </div>

                <div className="col-md-3">
                    <a href="#">
                        <img className="img-responsive item" src="img/item-small-dummy.jpg" alt="" />
                        <h5 className="item-title-related">i>clicker: New, In-box</h5>
                    </a>
                </div>

                <div className="col-md-3">
                    <a href="#">
                        <img className="img-responsive item" src="img/item-small-dummy-2.jpg" alt="" />
                        <h5 className="item-title-related">TI N-Spire: Used</h5>
                    </a>
                </div>

                <div className="col-md-3">
                    <a href="#">
                        <img className="img-responsive item" src="img/item-small-dummy-3.jpg" alt="" />
                        <h5 className="item-title-related">Econ 103 Text: Used</h5>
                    </a>
                </div>


            </div>
        </div>

      </div>

    )
  }
}
