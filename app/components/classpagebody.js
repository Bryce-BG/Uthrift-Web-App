import React from 'react';
import ITEM from './item.js';
import CLASSINFO from './classinfo.js';

export default class CLASSPAGEBODY extends React.Component {
  render() {
    return(

    <div className="container content-contain">
      <CLASSINFO title = "CS 326" description ="This class teaches students how to
       git gud. Those who don't git good will be thrown into the pits of
       Government contracting." instructor= "No Man" credits="4" term="Spring 2017"/>
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
            <div className="col-md-2 fb-left-sidebar"></div>
            <div className="col-md-8">
              <h2 className="page-header">Books</h2>
              <div className="row">
                <ITEM description="How to own an interview" referance="img/book1.jpg" price = "18.00"/>
                <ITEM description="Not as good as the internet" referance="img/book2.jpg" price = "21.00"/>
                <ITEM description="Intro to $$$" referance="img/book3.jpg" price = "25.00"/>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-2 fb-left-sidebar">
            </div>
            <div className="col-md-8">
              <h2 className="page-header">Tech</h2>
              <div className="row">
                <ITEM description="Lecture prison key" referance="img/iclicker-profile.jpg" price = "98.00"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)}}
