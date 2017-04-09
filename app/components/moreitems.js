import React from 'react';
import SUBITEM from './subitem.js';

export default class MOREITEMS extends React.Component {
  render() {

    return(
			<div>
        <div className = "container content-contain">
          <div className="row">
            <div className="col-md-12">
                <h3 className="page-header">More By Seller</h3>
                  <div className="panel-body">
                    {this.props.data.sellingList.map((items, i) => {
                      return(
                      <SUBITEM key={i} subitemimgsrc={this.props.data.sellingList[i].photoRef} subitemname={this.props.data.sellingList[i].Title} subitemcondition= {this.props.data.sellingList[i].Condition}/>
                      )
                    })}
                  </div>
            </div>
          </div>
      </div></div>

		)

  }
}
