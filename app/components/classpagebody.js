import React from 'react';
import CLASSITEM from './classitem.js';
import CLASSINFO from './classinfo.js';
import {getClassData} from '../server';

export default class CLASSPAGEBODY extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          textbookList: [],
          techList: []
        };
      }

  refresh() {
    getClassData(this.props.classID, (classData) => {
      this.setState(classData);
    });
  }

  componentDidMount()
  {
      //  console.log(this.props.classID);
      this.refresh();
  }

  componentDidUpdate (prevProps) {
    // respond to parameter change in scenario 3
    let oldId = prevProps.classID
    let newId = this.props.classID
    if (newId !== oldId)
      this.refresh();
  }

  render() {
    //console.log(this.props.classID);
    //console.log(this.state);
    return(
    <div className="container content-contain">
      <CLASSINFO title = {this.state.title} description ={this.state.description}
        instructor= {this.state.instructor} credits={this.state.credits}
        term={this.state.term}/>
      <div className="row">
        <ul className="nav nav-tabs nav-justified">
          <li className="active"><a data-toggle="tab" href="#Material">Course Material</a></li>
          <li><a data-toggle="tab" href="#Books">Schedule</a></li>
          <li><a data-toggle="tab" href="#Tech">Other info</a></li>
        </ul>
      </div>
      <div className="tab-content Items">
        <div id="Material" className="tab-pane fade in active">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h2 className="page-header">Books</h2>
              <div className="item-row row">{
                this.state.textbookList.map((item, i) => {
                  return (
                    <CLASSITEM key={this.state.textbookList[i]._id} item={this.state.textbookList[i]}/>
                  );
                })}
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-8">
              <h2 className="page-header">Tech</h2>
              <div className="item-row row">{
                this.state.techList.map((item, i) => {
                  return (
                    <CLASSITEM key={i} item={this.state.techList[i]}/>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)}}
