import React from 'react';
//import ITEMDESCRIPTION from './itemdescription.js';

export default class ITEMHERO extends React.Component {
  render() {
      console.log(this.props);
    return (
      <div>
        <div className="container content-contain">

          <div className="row">
              <div className="col-md-12">
                  <h1 className="page-header">{this.props.name}</h1>
              </div>
          </div>

          <div className="row">

              <div className="col-md-6">
                  <img className="img-responsive big-picture" src={this.props.itembigpic} alt="" />
              </div>

              <div className="col-md-6">
                  <h3>Description</h3>
                  <p>{this.props.descriptionparagraph}</p>
                  <h3>Details</h3>
                  <ul>
                      <li>Condition: {this.props.condition}</li>
                  </ul>
                  <h3>Price: {this.props.price}</h3>
                  <h3>Seller: {this.props.seller}</h3>
                  <p><strong>Phone:</strong> {this.props.sellerPhone}</p>
                  <p><strong>Email:</strong> {this.props.sellerEmail}</p>
              </div>



          </div>
        </div>
      </div>
    )
  }
}
