import React from 'react';
import SUBITEM from './subitem.js';

export default class MOREITEMS extends React.Component {
  render() {
    return (
      <div className="container content-contain">
        <div className="row">

          <div className="col-md-12">
              <h3 className="page-header">{this.props.itemscat}</h3>
          </div>

          <SUBITEM subitemimgsrc="img/item-small-dummy.jpg" subitemname="i>clicker"
            subitemcondition="New, In-box"
          />

          <SUBITEM subitemimgsrc="img/item-small-dummy.jpg" subitemname="i>clicker"
            subitemcondition="New, In-box"
          />

          <SUBITEM subitemimgsrc="img/item-small-dummy.jpg" subitemname="i>clicker"
            subitemcondition="New, In-box"
          />

          <SUBITEM subitemimgsrc="img/item-small-dummy.jpg" subitemname="i>clicker"
            subitemcondition="New, In-box"
          />

        </div>
      </div>
    )
  }
}
