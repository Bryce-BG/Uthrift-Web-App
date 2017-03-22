import React from 'react';

export default class MOREITEMS extends React.Component {
  render() {
    return (
      <div className="container content-contain">
        <div className="row">

            <div className="col-md-12">
                <h3 className="page-header">{this.props.itemscat}</h3>
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
      </div>
    )
  }
}
