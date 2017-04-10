import React from 'react';

export default class CLASSINFO extends React.Component
{
  render() {
    return (
      <div>
        <div className="col-md-5">
          <h1 className="page-header class-title">
                {this.props.title}
          </h1>
        </div>
        <div className="col-md-7">
        <p className="class-description">{this.props.description}
         <br/><br/> Instructor: {this.props.instructor}
         <br/> Credits: {this.props.credits} <br/> Term: {this.props.term}
        </p>
        </div>
      </div>
    )
  }
}
