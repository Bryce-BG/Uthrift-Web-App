import React from 'react';

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
                <div className="row">
                  <div className="col-md-2">
                    <a href="#"><img src="img/iclicker-profile.jpg" width="80" height="80" /></a>
                  </div>
                  <div className="col-md-2">
                    <a href="#"><img src="img/Lamp.jpg" width="80" height="80" /></a>
                  </div>
                </div>

                <div className="row center">
                  <div className="col-md-2">
                    <a href="#">Iclicker</a>
                  </div>
                  <div className="col-md-2">
                    <a href="#">LED Desk Lamp...</a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-2">
                    Status: <font color="#FFFF00">Selling</font>
                  </div>
                  <div className="col-md-2">
                    Statas: <font color="#7CFC00">Sold</font>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
		 </div>
	 )
 }
}
