import React from 'react';



export default class SUBMISSIONFORMCATEGORY extends React.Component {
  render() {
    return (
      <div>
        {/*<!--- Start Category Select --->*/}
        <div className = "col-md-12" htmlStyle = "padding-top: 15px;">
          <h3 htmlStyle ="margin-bottom: 25px;">Select Applicable Categories</h3>
          {/*<!--- Start Textbook --->*/}
          <label className="form-check-label categoryEntry" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
            <input className="form-check-input" type="checkbox" name="categoryOptions" id="Textbook" value="option1"/> Textbook
          </label>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                  <label htmlStyle ="padding-left: 15px;">Author:</label>
                </div>
                <div className="col-md-9 pull-right">
                  <input type="text" className = "form-control thin" placeholder="ex. Leo Tolstoy" />
                </div>
              </div>
              <div className="row" htmlStyle ="padding-top:4px;">
                <div className="col-md-3">
                  <label htmlStyle ="padding-left: 15px;">Edition:</label>
                </div>
                <div className="col-md-9">
                  <input type="number" className = "form-control thin" placeholder="00" />
                </div>
              </div>
            <div className = "form-check form-check-inline" htmlStyle ="padding-left: 15px; padding-top: 4px;">
                <label className="form-check-label sp16">
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
          <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
            <input className="form-check-input" type="checkbox" name="categoryOptions" id="Clothing" value="option2"/> Clothing
          </label>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                  <label htmlStyle ="padding-left: 15px;">Size:</label>
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
                  <label htmlStyle ="padding-left: 5px;">OR</label>
                </div>
                <div className="col-md-4">
                  <input type="number" className = "form-control thin" placeholder="00" />
                </div>
              </div>
              <div className="row" htmlStyle ="padding-top:4px;">
                <div className="col-md-2">
                  <label htmlStyle ="padding-left: 20px;">OR</label>
                </div>
                <div className="col-md-10">
                  <input type="text" className = "form-control thin" placeholder="ex. 32 waist, 32 length" />
                </div>
              </div>
            <div className = "form-check form-check-inline" htmlStyle ="padding-left: 15px; padding-top: 4px;">
                <label className="form-check-label sp12">
                  <input className="form-check-input" type="checkbox" name="clothingOptions" id="adult" value="option1"/> Adult
                </label>
                <label className="form-check-label sp42">
                  <input className="form-check-input" type="checkbox" name="clothingOptions" id="child" value="option2"/> Child
                </label>
                <label className="form-check-label sp12">
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
          <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
            <input className="form-check-input" type="checkbox" name="categoryOptions" id="Tech" value="option3"/> Tech
          </label>
            <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
            <div className="left">
              <textarea className="form-control textarea" id="techTextarea" rows="3" placeholder = "Describe the item here..."></textarea>
            </div>
          {/*<!--- End Tech --->*/}
          <hr />
          {/*<!--- Start Events --->*/}
          <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
            <input className="form-check-input" type="checkbox" name="categoryOptions" id="Events" value="option4"/> Events
          </label>
            <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
            <div className="left">
              <textarea className="form-control textarea" id="eventTextarea" rows="3" placeholder = "Describe the item here..."></textarea>
            </div>
        {/*<!--- End Events --->*/}
          <hr />
          {/*<!--- Start Furniture --->*/}
          <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
            <input className="form-check-input" type="checkbox" name="categoryOptions" id="Furniture" value="option5"/> Furniture
          </label>
            <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
            <div className="left">
              <textarea className="form-control textarea" id="furnitureTextarea" rows="3" placeholder = "Describe the item here..."></textarea>
            </div>
        {/*<!--- End Furniture --->*/}
          <hr />
          {/*<!--- Start Misc --->*/}
          <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
            <input className="form-check-input" type="checkbox" name="categoryOptions" id="Miscellaneous" value="option6"/> Miscellaneous
          </label>
          <div className="left">
            <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
              <textarea className="form-control textarea" id="miscTextarea" rows="3" placeholder = "Describe the item here..."></textarea>
            </div>
        {/*<!--- End Misc --->*/}
        </div>

      </div>

    )
  }
}
