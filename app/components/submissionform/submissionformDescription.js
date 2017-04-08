import React from 'react';
//import {submitItem} from '../../server';

export default class SUBMISSIONFORMDESCRIPTION extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      title: "",
      conDesc: "",
      cost: ""
    };
  }

  /**
   * Called when the user clicks the 'post' button.
   * Triggers the `onPost` prop if the post isn't empty, and clears
   * the component.
   */
  handlePost(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // Trim whitespace from beginning + end of entry.
    var title_ = this.state.title;
    if (title_ !== "") {
      console.log(title_);
      // submitItem(userID, title, price, condition, conditionDescription, category, categoryDescription, photoRef, cb)
      //submitItem(1, title_, title_, title_, title_, title_, title_);
      this.setState({title: "", conDesc: "", cost: ""});
    }
  }

  /**
   * Called when the user types a character into the status update box.
   * @param e An Event object.
   */
  handleChange(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // e.target is the React Virtual DOM target of the input event -- the
    // <textarea> element. The textarea's `value` is the entire contents of
    // what the user has typed in so far.
    if (e.target.id == "titleInput"){
      this.setState({title: e.target.value});
      console.log("title");
      console.log(e.target.value);
    }
    if (e.target.id == "conditionTextarea"){
      this.setState({conDesc: e.target.condDesc});
      console.log("condition");
    }
    if (e.target.id == "costInput"){
      this.setState({cost: e.target.cost});
      console.log("cost");
    }
  }

  render() {
    return (
      <div>
        {/*  <!--- Start Main Submission Criteria --->*/}
          <div className="form-group">
            <label htmlFor="titleInput">Title</label>
            <input type="text" className="form-control" id="titleInput" placeholder="ex. War and Peace"
              value={this.state.value} onChange={(e) => this.handleChange(e)}/>
          </div>

          <label htmlFor="costInput">Cost</label>
            <div className="input-group form-entry">
              <div className="input-group-addon">$</div>
              <input type="number" min = "0" step = "0.01" className="form-control" id="costInput" placeholder="150.00"
                value={this.state.cost} onChange={(e) => this.handleChange(e)} />
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
            <textarea className="form-control textarea" id="conditionTextarea" rows="3" placeholder = "Describe the item's condition here... ex: Has light scratch marks."
              value={this.state.conDesc} onChange={(e) => this.handleChange(e)} />
          </div>
          {/*<!--- End Main Submission Criteria --->*/}

          {/*<!--- Submit Button --->*/}
          <div className="form-group row">
            <div className="col-md-3 sp24"></div>
            <div className="col-md-3">
              <button type="submit" className="btn btn-primary" onClick={(e) => this.handlePost(e)}>Post for Sale</button>
            </div>
          </div>

      </div>
    )
  }
}
