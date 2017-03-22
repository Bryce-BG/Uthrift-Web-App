import React from 'react';

export default class ITEMHERO extends React.Component {
  render() {
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
                  <img className="img-responsive" src={this.props.itembigpic} alt="" />
              </div>

              <div className="col-md-6">
                  <h3>Description</h3>
                  <p>iclicker is an award winning student response solution that allows you to easily transform your classroom into an active learning environment.</p>
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
        </div>
      </div>
    )
  }
}
