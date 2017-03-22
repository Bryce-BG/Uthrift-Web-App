import React from 'react';
import NAVBAR from './navbar.js';


export default class ITEM extends React.Component {
  render() {
    return (
      <div>
        <NAVBAR  />
        <div className="container content-contain">

            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">i>clicker</h1>
                </div>
            </div>

            <div className="row">

                <div className="col-md-6">
                    <img className="img-responsive" src="img/dummy-item-main.jpg" alt="" />
                </div>

                <div className="col-md-6">
                    <h3>Description</h3>
                    <p>i>clicker is an award winning student response solution that allows you to easily transform your classroom into an active learning environment.</p>
                    <h3>Details</h3>
                    <ul>
                        <li>Condition: Like New</li>
                        <li>Used for one year</li>
                        <li>Batteries included</li>
                    </ul>
                    <h3>Price: $35</h3>
                    <button type="button" className="btn btn-primary item-buttons">Add to Watching</button>
                    <button type="button" className="btn btn-primary item-buttons">Contact Seller</button>
                </div>

            </div>


            <div className="row">

                <div className="col-md-12">
                    <h3 className="page-header">Related Products</h3>
                </div>

                <div className="col-md-3">
                    <a href="#">
                        <img className="img-responsive item" src="img/item-small-dummy.jpg" alt="" />
                        <h5 className="item-title-related">i>clicker: New, In-box</h5>
                    </a>
                </div>

                <div className="col-md-3">
                    <a href="#">
                        <img className="img-responsive item" src="img/item-small-dummy.jpg" alt="" />
                        <h5 className="item-title-related">i>clicker: New, In-box</h5>
                    </a>
                </div>

                <div className="col-md-3">
                    <a href="#">
                        <img className="img-responsive item" src="img/item-small-dummy.jpg" alt="" />
                        <h5 className="item-title-related">i>clicker: New, In-box</h5>
                    </a>
                </div>

                <div className="col-md-3">
                    <a href="#">
                        <img className="img-responsive item" src="img/item-small-dummy.jpg" alt="" />
                        <h5 className="item-title-related">i>clicker: New, In-box</h5>
                    </a>
                </div>

            </div>

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
