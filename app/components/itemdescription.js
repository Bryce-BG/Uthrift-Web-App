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
              <li>{this.props.extrainfo}</li>
          </ul>
          <h3>Price: {this.props.price}</h3>
          <button type="button" className="btn btn-primary item-buttons">Add to Watching</button>
          <button type="button" className="btn btn-primary item-buttons">Contact Seller</button>
      </div>
    )
  }
}
