import React from 'react';
import PROFILEITEM from './profileitem';

export default class PROFILESELLINGHISTORY extends React.Component{
	checkSoldStatus(){
		var status = [];
		for(var i = 0; i < this.props.data.sellingList.length; i++){
			if(this.props.data.sellingList[i].Sold){
				status.push("#fe0000");
				status.push("Sold");
			}
			else{
				status.push("#54a407");
				status.push("Selling");
			}
		}
		return status;
	}

	render(){
		var statusOfItem = this.checkSoldStatus();

		return(
			<div>
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">SELLING/SOLD</div>
              <div className="panel-body">
								{this.props.data.sellingList.map((items, i) => {
									return(
										<PROFILEITEM key={i} img={this.props.data.sellingList[i].photoRef} name={this.props.data.sellingList[i].Title} color={statusOfItem[i * 2]} status={statusOfItem[i * 2 + 1]}/>
									)
								})}
              </div>
            </div>
          </div>
        </div>
			</div>
		)
	}
}
