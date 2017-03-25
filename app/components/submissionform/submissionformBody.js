import React from 'react';
import SUBMISSIONFORMLEFT from './submissionformLeft.js';


export default class SUBMISSIONFORMBODY extends React.Component {
  render() {
    return (
      <div className = "container content-contain">
        {/*<!-- Start Heading -->*/}
        <div className="row">
            <div className="col-md-12">
                <h1 className="page-header">Submit an Item for Sale</h1>
            </div>
        </div>
        {/*<!-- End Heading -->*/}

        <div className = "row">

          <SUBMISSIONFORMLEFT />

      {/*<!--- Main Content --->*/}
          <div className = "col-md-7" style="padding-bottom: 50px;">
              {/*<!--- Start Class Related --->*/}
            <div className = "form-check form-check-inline" style = "padding-top: 25px; margin-bottom: 5px;">
                <label className = "sp8">Is this item class-related?</label>
                <label className="form-check-label sp8" htmlFor = "classRelated">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="radioYes" value="option1"/> Yes
                </label>
                <label className="form-check-label sp50" htmlFor = "classRelated">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="radioNo" value="option2"/> No
                </label>
            </div>
            <div className = "form-group-row">
              <label className = "sp8" htmlFor="courseSelect">Course Subject:</label>
              <select className="custom-select" style="margin-right: 16px;" id="subjectSelect">
                <option selected>Choose...</option>
                <option value="1">Accounting</option>
                <option value="2">Aerospace Studies</option>
                <option value="3">Animal Science</option>
                <option value="4">Anthropology</option>
                <option value="5">Arabic</option>
                <option value="6">Community Health (see PUBHLTH)</option>
              </select>
              <label className = "sp8" htmlFor="courseSelect">Course Number:</label> {/*}<!--- Note: This does not allow for course number that include letters like 197U. Search criteria should simply be 197 in this example --->*/}
              <div className="pull-right" style="padding-right: 0px;">
                <input type="number" min = "0" step = "1" className="custom-select" id="courseNumber" placeholder="000"/>
              </div>
              <h1 className="page-header"></h1>
            </div>
            {/*<!--- End Class Related --->*/}
            {/*<!--- Start Category Select --->*/}
            <div className = "col-md-12" style = "padding-top: 15px;">
              <h3 style="margin-bottom: 25px;">Select Applicable Categories</h3>
              {/*<!--- Start Textbook --->*/}
              <label className="form-check-label categoryEntry" style="font-size: 20px;" htmlFor = "categorySelect">
                <input className="form-check-input" type="checkbox" name="categoryOptions" id="Textbook" value="option1"/> Textbook
              </label>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-2">
                      <label style="padding-left: 15px;">Author:</label>
                    </div>
                    <div className="col-md-9 pull-right">
                      <input type="text" className = "form-control" placeholder="ex. Leo Tolstoy" style="height:23px;"/>
                    </div>
                  </div>
                  <div className="row" style="padding-top:4px;">
                    <div className="col-md-3">
                      <label style="padding-left: 15px;">Edition:</label>
                    </div>
                    <div className="col-md-9">
                      <input type="number" className = "form-control" placeholder="00" style="height:23px"/>
                    </div>
                  </div>
                <div className = "form-check form-check-inline" style="padding-left: 15px; padding-top: 4px;">
                    <label className="form-check-label" style="margin-right: 18px;">
                      <input className="form-check-input" type="radio" name="bookCoverOptions" id="hard" value="option1"/> Hardcover
                    </label>
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="bookCoverOptions" id="paper" value="option2"/> Paperback
                    </label>
                </div>
                </div>
                <div className="col-md-6">
                  <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                  <textarea className="form-control textarea" id="textbookTextarea" rows="3" placeholder = "Describe the item here..."></textarea>
                </div>
              </div>
              {/*<!--- End Textbook --->*/}
              <hr />
              {/*<!--- Start Clothing --->*/}
              <label className="form-check-label" style="font-size: 20px;" htmlFor = "categorySelect">
                <input className="form-check-input" type="checkbox" name="categoryOptions" id="Clothing" value="option2"/> Clothing
              </label>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-2">
                      <label style="padding-left: 15px;">Size:</label>
                    </div>
                    <div className="col-md-4">
                      <select className="custom-select">
                        <option selected>Choose...</option>
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label style="padding-left: 5px;">OR</label>
                    </div>
                    <div className="col-md-4">
                      <input type="number" className = "form-control" placeholder="00" style="height:23px"/>
                    </div>
                  </div>
                  <div className="row" style="padding-top:4px;">
                    <div className="col-md-2">
                      <label style="padding-left: 20px;">OR</label>
                    </div>
                    <div className="col-md-10">
                      <input type="text" className = "form-control" placeholder="ex. 32 waist, 32 length" style="height:23px"/>
                    </div>
                  </div>
                <div className = "form-check form-check-inline" style="padding-left: 15px; padding-top: 4px;">
                    <label className="form-check-label" style="margin-right: 6px;">
                      <input className="form-check-input" type="checkbox" name="clothingOptions" id="adult" value="option1"/> Adult
                    </label>
                    <label className="form-check-label" style="margin-right: 20px;">
                      <input className="form-check-input" type="checkbox" name="clothingOptions" id="child" value="option2"/> Child
                    </label>
                    <label className="form-check-label" style="margin-right: 6px;">
                      <input className="form-check-input" type="checkbox" name="clothingOptions" id="mens" value="option2"/> Mens
                    </label>
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" name="clothingOptions" id="womens" value="option2"/> Womens
                    </label>
                </div>
                </div>
                <div className="col-md-6">
                  <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                  <textarea className="form-control textarea" id="clothingTextarea" rows="3" placeholder = "Describe the item here..."></textarea>
                </div>
              </div>
              {/*<!--- End Clothing --->*/}
              <hr />
              {/*<!--- Start Tech --->*/}
              <label className="form-check-label" style="font-size: 20px;" htmlFor = "categorySelect">
                <input className="form-check-input" type="checkbox" name="categoryOptions" id="Tech" value="option3"/> Tech
              </label>
                <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                <div  style="padding-left: 15px;">
                  <textarea className="form-control textarea" id="techTextarea" rows="3" placeholder = "Describe the item here..."></textarea>
                </div>
              {/*<!--- End Tech --->*/}
              <hr />
              {/*<!--- Start Events --->*/}
              <label className="form-check-label" style="font-size: 20px;" htmlFor = "categorySelect">
                <input className="form-check-input" type="checkbox" name="categoryOptions" id="Events" value="option4"/> Events
              </label>
                <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                <div  style="padding-left: 15px;">
                  <textarea className="form-control textarea" id="eventTextarea" rows="3" placeholder = "Describe the item here..."></textarea>
                </div>
            {/*<!--- End Events --->*/}
              <hr />
              {/*<!--- Start Furniture --->*/}
              <label className="form-check-label" style="font-size: 20px;" htmlFor = "categorySelect">
                <input className="form-check-input" type="checkbox" name="categoryOptions" id="Furniture" value="option5"/> Furniture
              </label>
                <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                <div  style="padding-left: 15px;">
                  <textarea className="form-control textarea" id="furnitureTextarea" rows="3" placeholder = "Describe the item here..."></textarea>
                </div>
            {/*<!--- End Furniture --->*/}
              <hr />
              {/*<!--- Start Misc --->*/}
              <label className="form-check-label" style="font-size: 20px;" htmlFor = "categorySelect">
                <input className="form-check-input" type="checkbox" name="categoryOptions" id="Miscellaneous" value="option6"/> Miscellaneous
              </label>
              <div  style="padding-left: 15px;">
                <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                  <textarea className="form-control textarea" id="miscTextarea" rows="3" placeholder = "Describe the item here..."></textarea>
                </div>
            {/*<!--- End Misc --->*/}
            </div>

          </div>
        </div>
      </div>


    )
  }
}
