import React from 'react';
import {Link} from 'react-router';

export default class CLASSINFO extends React.Component
{
  render() {
    return (
      <div>
        <div className="col-md-5">
          <h1 className="page-header class-title">
                {this.props.title}
          </h1>
          <div>
            <h2 className="page-header class-title">
              <Link to={"/searchPage/" + this.props.user + "/" + "Classes" +  "/"  + this.props.subject}>
              {this.props.subject}</Link></h2>
          </div>
        </div>
        <div className="col-md-7">
        <p className="class-description">{this.props.description}
         <br/><br/> Instructor: {this.props.instructor}
         <br/> Credits: {this.props.credits} <br/> Term: {this.props.term}
         <br/> Code: {this.props.code}
        </p>
        </div>
      </div>
    )
  }
}
