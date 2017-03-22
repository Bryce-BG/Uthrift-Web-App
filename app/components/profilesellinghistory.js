import React from 'react';
import PROFILEITEM from './profileitem';

export default class PROFILESELLINGHISTORY extends React.Component{
	render(){
		return(
			<div>
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">SELLING/SOLD</div>
              <div className="panel-body">
								<PROFILEITEM img="img/iclicker-profile.jpg" name="Iclicker" color="#FFFF00" />
								<PROFILEITEM img="img/Lamp.jpg" name="LED Desk Lamp..." color="#7CFC00" />
              </div>
            </div>
          </div>
        </div>
		 </div>
	 )
 }
}
