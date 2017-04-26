import React from 'react';
import Router from 'react'

export default class SEARCHBAR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: " ",
      category: " "
    }
    contextTypes: {
      router: React.PropTypes.object.isRequired
    }
  }

  handleSearchButtonClick(e) {
    e.preventDefault();
    //console.log(this.state);
    this.search();
  }

  search() {
    if (this.state.searchTerm.trim() !== "") {
      var se = document.getElementById("categories").value;
      this.setState({
        category: se
      }, function () {
        this._reactInternalInstance._context.history.push({ pathname: "/searchPage/" + this.props.user + "/" + this.state.category +  "/"  + this.state.searchTerm });
      });
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.searchTerm !== null) {
  //     // Keep searchTerm in-sync with component changes.
  //     this.setState({
  //       searchTerm: newProps.searchTerm
  //     });
  //   }
  // }

  handleKeyUp(e) {
    e.preventDefault();
    if (e.key === "Enter") {
      this.search();
    }
  }


  render() {

    return (
      <div className="uthrift-navbar-search col-md-8" id="navSearch" >
        <form role="search" className="col-md-12" id = "searchForm">
          <div className="col-md-3" id = "catogory-Select" >
            <select id="categories" className="form-control dropdown">
              <option value = " ">Select Category</option>
              <option value="Textbooks">Textbooks</option>
              <option value="Clothing">Clothing</option>
              <option value="Tech">Tech</option>
              <option value="Events">Events</option>
              <option value="Furniture">Furniture</option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option value="Classes">Classes</option>
            </select>
          </div>
          <input className="uthrift-navbar-input col-md-8"  type="text" placeholder="Search UThrift..." name="search"  value={this.state.searchTerm} onChange={(e) => this.handleChange(e)} onKeyUp={(e) => this.handleKeyUp(e)}/>
            <button className="uthrift-navbar-button col-md-1" onClick={(e) => this.handleSearchButtonClick(e)} >
              <svg width="15px" height="15px">
                  <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
              </svg>
            </button>
        </form>
      </div>
    );
  }
}

// Tell React-Router that SearchBar needs to use the router dynamically.
/*SEARCHBAR.contextTypes = {
  router: React.PropTypes.object.isRequired
};*/
