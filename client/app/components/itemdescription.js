import React from 'react';

export default class ITEMDESCRIPTION extends React.Component {
  render() {
    return (
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
    )
  }
}
