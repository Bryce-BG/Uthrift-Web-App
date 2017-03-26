import React from 'react';


export default class SUBMISSIONFORMDESCRIPTION extends React.Component {
  render() {
    return (
      <div>
        {/*  <!--- Start Main Submission Criteria --->*/}
          <div className="form-group">
            <label htmlFor="titleInput">Title</label>
            <input type="text" className="form-control" id="titleInput" placeholder="ex. War and Peace"/>
          </div>

          <label htmlFor="costInput">Cost</label>
            <div className="input-group form-entry">
              <div className="input-group-addon">$</div>
              <input type="number" min = "0" step = "0.01" className="form-control" id="costInput" placeholder="150.00"/>
            </div>

          <div className = "photo-entry">
            <label htmlFor="conditionSelect">Condition</label>
            <select className="form-control" id="conditionSelect">
              <option selected>Choose...</option>
              <option>New</option>
              <option>Like New</option>
              <option>Good Enough</option>
              <option>Visibly Used</option>
              <option>Poor</option>
            </select>
          </div>
          <div className="form-group form-entry">
            <label className = "sr-only" htmlFor="conditionTextarea">Condition Description</label>
            <textarea className="form-control textarea" id="conditionTextarea" rows="3" placeholder = "Describe the item's condition here... ex: Has light scratch marks."></textarea>
          </div>
          {/*<!--- End Main Submission Criteria --->*/}

      </div>
    )
  }
}
