import React from 'react';

export default class PROFILEINFORMATION extends React.Component{
	constructor(props) {
    super(props);
    this.state = props.data;
  }

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
                  <img src={this.state.Photo} width="80%" />
                  <br />
									<br />
									<br />
									<br />
									<div className="photo-entry gap-button">
										<input type="file" className="form-control-file" id="photoUpload1" aria-describedby="fileHelp"/>
									</div>
                </div>

                <div className="col-md-7">
									<div className="row">
                    <div className="col-md-5 gap-btw">
                      <font size="3">Firstname</font>
                      <button type="button" className="btn btn-default pull-right tittle_shape">
                        <span className="glyphicon glyphicon-edit"></span>
                      </button>
                    </div>
										<div className="col-md-5 gap-btw">
                      <font size="3">Lastname</font>
                      <button type="button" className="btn btn-default pull-right tittle_shape">
                        <span className="glyphicon glyphicon-edit"></span>
                      </button>
                    </div>
                  </div>

									<div className="form-group row gap">
                    <div className="col-md-5">
                      <input className="form-control" type="firstname" value={this.state.FirstName} id="name" readOnly />
                    </div>
										<div className="col-md-5">
                      <input className="form-control" type="lastname" value={this.state.LastName} id="name" readOnly />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8 gap-btw">
                      <font size="3">Nickname</font>
                      <button type="button" className="btn btn-default pull-right tittle_shape">
                        <span className="glyphicon glyphicon-edit"></span>
                      </button>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
                      <input className="form-control" type="nickname" value={this.state.NickName} id="name" readOnly />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8 gap-btw">
                      <font size="3">Password</font>
                      <button type="button" className="btn btn-default pull-right tittle_shape">
                        <span className="glyphicon glyphicon-edit"></span>
                      </button>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
                      <input className="form-control" type="password" value={this.state.Password} id="password" readOnly />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8 gap-btw">
                      <font size="3">Email</font>
                      <button type="button" className="btn btn-default pull-right tittle_shape">
                        <span className="glyphicon glyphicon-edit"></span>
                      </button>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
                      <input className="form-control" type="email" value={this.state.Email} id="email" readOnly />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8 gap-btw">
                      <font size="3">Cellphone</font>
                      <button type="button" className="btn btn-default pull-right tittle_shape">
                        <span className="glyphicon glyphicon-edit"></span>
                      </button>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
                      <input className="form-control" type="tel" value={this.state.Cellphone} id="tel" readOnly />
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
