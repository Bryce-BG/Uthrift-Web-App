import React from 'react';



export default class SUBMISSIONFORMCLASS extends React.Component {
  render() {
    return (
      <div>
        {/*<!--- Start Class Related --->*/}
          <div className = "form-check form-check-inline top">
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
            <select className="custom-select sp16" id="subjectSelect">
              <option selected>Choose...</option>
              <option value="1">Accounting</option>
              <option value="2">Aerospace Studies</option>
              <option value="3">Animal Science</option>
              <option value="4">Anthropology</option>
              <option value="5">Arabic</option>
              <option value="6">Community Health (see PUBHLTH)</option>
            </select>
            <label className = "sp8" htmlFor="courseSelect">Course Number:</label> {/*}<!--- Note: This does not allow for course number that include letters like 197U. Search criteria should simply be 197 in this example --->*/}
            <div className="pull-right right">
              <input type="number" min = "0" step = "1" className="custom-select narrow" id="courseNumber" placeholder="000"/>
            </div>
            <h1 className="page-header"></h1>
          </div>
        {/*<!--- End Class Related --->*/}

      </div>

    )
  }
}
