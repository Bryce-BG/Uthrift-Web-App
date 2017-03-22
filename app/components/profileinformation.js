import React from 'react';

export default class PROFILEINFORMATION extends React.Component{
	render(){
		return(
			<div>
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <font size="6">Your Profile</font>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="col-md-5 icon_shape">
                  <img src="img/avatar2.png" width="80%" />
                  <br />
									<br />
                  <button type="button" className="btn btn-default">
                      Change
                  </button>
                </div>

                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-9 gap-btw">
                      <font size="3">Nickname</font>
                      <button type="button" className="btn btn-default pull-right tittle_shape">
                        <span className="glyphicon glyphicon-edit"></span>
                      </button>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
                      <input className="form-control" type="nickname" value={this.props.nickname} id="name" readonly />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-9 gap-btw">
                      <font size="3">Password</font>
                      <button type="button" className="btn btn-default pull-right tittle_shape">
                        <span className="glyphicon glyphicon-edit"></span>
                      </button>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
                      <input className="form-control" type="password" value={this.props.password} id="password" readonly />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-9 gap-btw">
                      <font size="3">Email</font>
                      <button type="button" className="btn btn-default pull-right tittle_shape">
                        <span className="glyphicon glyphicon-edit"></span>
                      </button>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
                      <input className="form-control" type="email" value={this.props.email} id="email" readonly />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-9 gap-btw">
                      <font size="3">Cellphone</font>
                      <button type="button" className="btn btn-default pull-right tittle_shape">
                        <span className="glyphicon glyphicon-edit"></span>
                      </button>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
                      <input className="form-control" type="tel" value={this.props.tel} id="tel" readonly />
                    </div>
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
