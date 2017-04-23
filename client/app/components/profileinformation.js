import React from 'react';
import {updateUserData} from '../server';

export default class PROFILEINFORMATION extends React.Component{
	constructor(props) {
    super(props);
		this.state = props.data;
  }

	handleChangeFirstName(e) {
    this.setState({ FirstName: e.target.value });
  }

	handleChangeLastName(e) {
    this.setState({ LastName: e.target.value });
  }

	handleChangeNickName(e) {
    this.setState({ NickName: e.target.value });
  }

	handleChangePassword(e) {
    this.setState({ Password: e.target.value });
  }

	handleChangeEmail(e) {
    this.setState({ Email: e.target.value });
  }

	handleChangeCellphone(e) {
    this.setState({ Cellphone: e.target.value });
  }

	handleChangePhoto(e) {
    this.setState({ Photo: "img" + e.target.value.substr(11) });
  }

	handleSaveClick(clickEvent){
		clickEvent.preventDefault();
		if (clickEvent.button == 0){
			updateUserData(this.state);
		}
	}

	handleChangeCellphone(e) {
    this.setState({ Cellphone: e.target.value });
  }

	render(){
		return(
			<div>
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <font size="6">Your Profile</font>
						<div className="button_shape pull-right">
							<button type="button" className="btn btn-default" onClick={(e) => this.handleSaveClick(e)}>
								Save
							</button>
						</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="col-md-5 icon_shape">
                  <img src={this.state.Photo} width="200" height="200" />
                  <br />
									<br />
									<br />
									<br />
									<div className="photo-entry gap-button">
										<input type="file" className="form-control-file" id="photoUpload1" aria-describedby="fileHelp" onChange={(e) => this.handleChangePhoto(e)}/>
									</div>
                </div>

                <div className="col-md-7">
									<div className="form-group row gap">
                    <div className="col-md-5">
											<label>FirstName</label>
                      <input className="form-control" type="text" value={this.state.FirstName} onChange={(e) => this.handleChangeFirstName(e)}/>
                    </div>
										<div className="col-md-5">
											<label>LastName</label>
                      <input className="form-control" type="text" value={this.state.LastName} onChange={(e) => this.handleChangeLastName(e)}/>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
											<label>NickName</label>
                      <input className="form-control" type="text" value={this.state.NickName} onChange={(e) => this.handleChangeNickName(e)}/>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
											<label>Password</label>
                      <input className="form-control" type="Password" value={this.state.Password} onChange={(e) => this.handleChangePassword(e)}/>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
											<label>Email</label>
                      <input className="form-control" type="email" value={this.state.Email} onChange={(e) => this.handleChangeEmail(e)}/>
                    </div>
                  </div>

                  <div className="form-group row gap">
                    <div className="col-md-8">
											<label>Cellphone</label>
                      <input className="form-control" type="text" value={this.state.Cellphone} onChange={(e) => this.handleChangeCellphone(e)}/>
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
