import React from 'react';
import ITEMDESCRIPTION from './itemdescription.js';

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

              <ITEMDESCRIPTION
                descriptionparagraph="iclicker is an award winning student response solution that allows you to easily transform your classroom into an active learning environment."
                 condition="Like New" extrainfo="Batteries included" price="$35" seller="John Doe" sellerEmail="john@doe.com"
                 sellerPhone="1800JOHNDOE"
              />

          </div>
        </div>
      </div>
    )
  }
}
