import React from 'react';
import {submitItem, getClassItem} from '../../server';


export default class SUBMISSIONFORMBODY extends React.Component {

  // submitItem(userID, title, price, condition,
  //   conditionDescription, category, categoryDescription, photoRef, cb)
    constructor(props) {
      super(props);
      this.state = {
        value: "",
        title: "",
        price: "",
        condition: "",
        conDesc: "",
        classRelated: false,
          subject: "",
          courseNumber: "",
        category: "",
          txtbxchked: false,
          clothbxchked: false,
          techbxchked: false,
          eventbxchked: false,
          furnbxchked: false,
          miscbxchked: false,
        categoryDescription: "",
          categoryDescription01: "", //These are used for later combining together to form one categoryDescription
          categoryDescription01a: "",
          categoryDescription01b: "",
          hardcover: false,
          paperback: false,
        categoryDescription02: "",
          categoryDescription02a: "",
          categoryDescription02b: "",
          categoryDescription02c: "",
          categoryDescription02d: "",
            adult: false,
            child: false,
            man: false,
            woman: false,
          categoryDescription03: "",
          categoryDescription04: "",
          categoryDescription05: "",
          categoryDescription06: "",

          core_id: "000000000000000000000000",
          boolean: false, //for looping purposes
          photoRef: "img/war_peace.jpg", //This will normally save the info of the photo here, but will not store it to the database because the database can only hold 5mb so instead loads iclicker image when changed
          photoReftemp: "", //so that handlePhoto can take in parameter event e
          SellerId: this.props.user
      };
    }

    //Only way I could figure out how to beat react's asynchronous property when trying to update categoryDescription
    callback(){
      this.update();
    }

    //Checks all the category and category description fields for input and combines those inputs together
    update(){
      //Combines all category descriptions together (tabbed code blocks are sub items)
        if (this.state.categoryDescription01a.trim() != ""){
          this.setState({categoryDescription: "Author: " + this.state.categoryDescription01a.trim() + "   ", categoryDescription01a: ""}, this.callback);
        }
        else if (this.state.categoryDescription01b.trim() != ""){
          this.setState({categoryDescription: this.state.categoryDescription + "Edition: " + this.state.categoryDescription01b.trim() + "   ", categoryDescription01b: ""}, this.callback);
        }
        else if (this.state.hardcover == true){
          this.setState({categoryDescription: this.state.categoryDescription + "Hardcover   ", hardcover: false}, this.callback);
        }
        else if (this.state.paperback == true){
          this.setState({categoryDescription: this.state.categoryDescription + "Paperback   ", paperback: false}, this.callback);
        }
      else if (this.state.categoryDescription01.trim() != ""){
        this.setState({categoryDescription: this.state.categoryDescription + this.state.categoryDescription01.trim(), categoryDescription01: ""}, this.callback);
      }

        else if (this.state.categoryDescription != "" && this.state.boolean == false && (this.state.adult == true || this.state.child == true || this.state.man == true || this.state.woman == true || this.state.categoryDescription02 != "" || this.state.categoryDescription02a != "" || this.state.categoryDescription02b != "" || this.state.categoryDescription02c != "" || this.state.categoryDescription02d != "")){
          this.setState({categoryDescription: this.state.categoryDescription + " || ", boolean: true}, this.callback);
        }
        else if (this.state.categoryDescription02a != ""){
          this.setState({categoryDescription: this.state.categoryDescription + "Size: " + this.state.categoryDescription02a + "   ", categoryDescription02a: "", boolean: true}, this.callback);
        }
        else if (this.state.categoryDescription02b != ""){
          this.setState({categoryDescription: this.state.categoryDescription + "Size: " + this.state.categoryDescription02b + "   ", categoryDescription02b: "", boolean: true}, this.callback);
        }
        else if (this.state.categoryDescription02c.trim() != ""){
          this.setState({categoryDescription: this.state.categoryDescription + "Size: " + this.state.categoryDescription02c.trim() + "   ", categoryDescription02c: "", boolean: true}, this.callback);
        }
          else if (this.state.adult == true){
            this.setState({categoryDescription: this.state.categoryDescription + "Adult's   ", adult: false, boolean: true}, this.callback);
          }
          else if (this.state.child == true){
            this.setState({categoryDescription: this.state.categoryDescription + "Children's   ", child: false, boolean: true}, this.callback);
          }
          else if (this.state.man == true){
            this.setState({categoryDescription: this.state.categoryDescription + "Men's   ", man: false, boolean: true}, this.callback);
          }
          else if (this.state.woman == true){
            this.setState({categoryDescription: this.state.categoryDescription + "Women's   ", woman: false, boolean: true}, this.callback);
          }
      else if (this.state.categoryDescription02.trim() != ""){
        this.setState({categoryDescription: this.state.categoryDescription + this.state.categoryDescription02.trim(), categoryDescription02: "", boolean: true}, this.callback);
      }

      else if (this.state.categoryDescription03.trim() != ""){
        if (this.state.categoryDescription != ""){this.setState({categoryDescription: this.state.categoryDescription + " || " + this.state.categoryDescription03.trim(), categoryDescription03: ""}, this.callback);  }
          else {this.setState({categoryDescription: this.state.categoryDescription03.trim(), categoryDescription03: ""}, this.callback);}
      }
      else if (this.state.categoryDescription04.trim() != ""){
        if (this.state.categoryDescription != ""){this.setState({categoryDescription: this.state.categoryDescription + " || " + this.state.categoryDescription04.trim(), categoryDescription04: ""}, this.callback);  }
          else {this.setState({categoryDescription: this.state.categoryDescription04.trim(), categoryDescription04: ""}, this.callback);}
      }
      else if (this.state.categoryDescription05.trim() != ""){
        if (this.state.categoryDescription != ""){this.setState({categoryDescription: this.state.categoryDescription + " || " + this.state.categoryDescription05.trim(), categoryDescription05: ""}, this.callback);  }
          else {this.setState({categoryDescription: this.state.categoryDescription05.trim(), categoryDescription05: ""}, this.callback);}
      }
      else if (this.state.categoryDescription06.trim() != ""){
        if (this.state.categoryDescription != ""){this.setState({categoryDescription: this.state.categoryDescription + " || " + this.state.categoryDescription06.trim(), categoryDescription06: ""}, this.callback);  }
          else {this.setState({categoryDescription: this.state.categoryDescription06.trim(), categoryDescription06: ""}, this.callback);}
      }


      //category checkboxes are combined together if they are checked
      else if (this.state.txtbxchked == true){
        this.setState({category: "Textbooks", txtbxchked: false}, this.callback);
      }
      else if (this.state.clothbxchked == true){
        if (this.state.category != ""){this.setState({category: this.state.category + ",Clothing", clothbxchked: false}, this.callback);}
        else {this.setState({category: "Clothing", clothbxchked: false}, this.callback);}
      }
      else if (this.state.techbxchked == true){
        if (this.state.category != ""){this.setState({category: this.state.category + ",Tech", techbxchked: false}, this.callback);}
        else {this.setState({category: "Tech", techbxchked: false}, this.callback);}
      }
      else if (this.state.eventbxchked == true){
        if (this.state.category != ""){this.setState({category: this.state.category + ",Events", eventbxchked: false}, this.callback);}
        else {this.setState({category: "Events", eventbxchked: false}, this.callback);}
      }
      else if (this.state.furnbxchked == true){
        if (this.state.category != ""){this.setState({category: this.state.category + ",Furniture", furnbxchked: false}, this.callback);}
        else {this.setState({category: "Furniture", furnbxchked: false}, this.callback);}
      }
      else if (this.state.miscbxchked == true){
        if (this.state.category != ""){this.setState({category: this.state.category + ",Miscellaneous", miscbxchked: false}, this.callback);}
        else {this.setState({category: "Miscellaneous", miscbxchked: false}, this.callback);}
      }


      //Saves the new item to the database
      else if (this.state.title.trim() != "" && this.state.price != ""){
          this.setState({}, this.save);
      }
    }

    save(){
    //  console.log(this.state);
        submitItem(this.state, () => {
      // Database is now updated. Refresh the feed.
      //this.refresh();
    });
        window.location.reload();
    }

    //User clicks post:
      handleSaveClick(clickEvent){
        clickEvent.preventDefault();
          if (clickEvent.button == 0){
            this.update();
          }
      }

    handleChange(e) {
      // Prevent the event from "bubbling" up the DOM tree.
      e.preventDefault();
      if (e.target.id == "titleInput"){
        this.setState({title: e.target.value});
      }
      if (e.target.id == "priceInput"){
        this.setState({price: e.target.value});
      }
      if (e.target.id == "conditionSelect"){
        if (e.target.value != "Choose..."){
          this.setState({condition: e.target.value});
        }
      }
      if (e.target.id == "conditionTextarea"){
        this.setState({conDesc: e.target.value});
      }


      if (e.target.id == "subjectSelect"){
        if (e.target.value != "Choose..."){
          this.setState({subject: e.target.value});
        }
      }
      if (e.target.id == "courseNumber"){
        this.setState({courseNumber: e.target.value});
      }


      if (e.target.id == "textbookTextarea"){
        this.setState({categoryDescription01: e.target.value});
      }
          if (e.target.id == "author"){
            this.setState({categoryDescription01a: e.target.value});
          }
          if (e.target.id == "edition"){
            this.setState({categoryDescription01b: e.target.value});
          }

      if (e.target.id == "clothingTextarea"){
        this.setState({categoryDescription02: e.target.value});
      }
          if (e.target.id == "clotheSelect"){
            if (e.target.value != "Choose..."){
              this.setState({categoryDescription02a: e.target.value});
            }
          }
          if (e.target.id == "clotheNumber"){
              this.setState({categoryDescription02b: e.target.value});
          }
          if (e.target.id == "clotheDetail"){
              this.setState({categoryDescription02c: e.target.value});
          }

      if (e.target.id == "eventTextarea"){
        this.setState({categoryDescription03: e.target.value});
      }
      if (e.target.id == "techTextarea"){
        this.setState({categoryDescription04: e.target.value});
      }
      if (e.target.id == "furnitureTextarea"){
        this.setState({categoryDescription05: e.target.value});
      }
      if (e.target.id == "miscTextarea"){
        this.setState({categoryDescription06: e.target.value});
      }
    }

    handleCheckboxChange(e) {
      //class related radio btns
      if (e.target.id == "radioYes"){
        this.setState({classRelated: e.target.checked});
      }
      if (e.target.id == "radioNo"){
        this.setState({classRelated: !e.target.checked});
      }

      //categories
      if (e.target.id == "Textbook"){
        this.setState({txtbxchked: e.target.checked});
      }
      if (e.target.id == "Clothing"){
        this.setState({clothbxchked: e.target.checked});
      }
      if (e.target.id == "Tech"){
        this.setState({techbxchked: e.target.checked});
      }
      if (e.target.id == "Events"){
        this.setState({eventbxchked: e.target.checked});
      }
      if (e.target.id == "Furniture"){
        this.setState({furnbxchked: e.target.checked});
      }
      if (e.target.id == "Miscellaneous"){
        this.setState({miscbxchked: e.target.checked});
      }

      //hardcover/paperback radio btns
      if (e.target.id == "hard"){
        this.setState({hardcover: e.target.checked});
      }
      if (e.target.id == "paper"){
        this.setState({paperback: e.target.checked});
      }

      //clothing size checkboxes
      if (e.target.id == "adult"){
        this.setState({adult: e.target.checked});
      }
      if (e.target.id == "child"){
        this.setState({child: e.target.checked});
      }
      if (e.target.id == "man"){
        this.setState({man: e.target.checked});
      }
      if (e.target.id == "woman"){
        this.setState({woman: e.target.checked});
      }
    }

    handleClassItemSelection(e) {
      e.preventDefault();
      this.classItemFill();
      console.log(this.state.classItem);
    }

    classItemFill(){
      var se = document.getElementById("classItems").value;
      if(se === "none"){
        this.setState({
          core_id: "000000000000000000000000",
          title: "",
          conDesc: "",
          photoRef: "",
          category: ""
        });
      }
      else{
        var callbackFunction = (classItemData) => {
          this.setState({
            core_id: classItemData._id,
            title: classItemData.Title,
            conDesc: classItemData.Description,
            photoRef: classItemData.photoRef,
            category: classItemData.Category
          });
        }
        getClassItem(se, callbackFunction);
      }
    }

    uploadImage(e) {
    e.preventDefault();

    // Read the first file that the user selected (if the user selected multiple
    // files, we ignore the others).
    var reader = new FileReader();
    var file = e.target.files[0];

    // Called once the browser finishes loading the image.
    reader.onload = (upload) => {
      this.setState({
        photoRef: upload.target.result
      });
    };

    // Tell the brower to read the image in as a data URL!
    reader.readAsDataURL(file);
  }

  /**
   * Tells the browser to request a file from the user.
   */
  triggerImageUpload(e) {
    e.preventDefault();
    // Click the input HTML element to trigger a file selection dialog.
    this.refs.file.click();
  }


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

        <div className = "row bottom">

          <form>
            {/*<!--- Start Left Side --->*/}

              <div className = "col-md-4 sp42 left-column">

                {/*<!--- Start Upload Picture --->*/}
                    <img className = "photo-entry main-photo" src={this.state.photoRef} width="100%"/>

                    <div className="photo-entry categoryEntry">
                      <label htmlFor="photoUpload1">Upload Photo</label>
                      <input type="file" id="photoInput" name="file" accept=".jpg,.jpeg,.png,.gif" aria-describedby="fileHelp" onChange={(e) => this.uploadImage(e)}/>
                    </div>

                  {/* }  <label htmlFor="photoUpload2">OR drag and drop files below:</label>
                    <div className="upload-drop-zone" id="photoUpload2">
                      Just drag and drop files here
                    </div> */}
                  {/*  <!--- End Upload Picture --->*/}

                  {/*  <!--- Start Main Submission Criteria --->*/}
                    <div className="form-group">
                      <label htmlFor="titleInput">Title</label>
                      <input type="text" className="form-control" id="titleInput" placeholder="ex. War and Peace"
                        value={this.state.title} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <label htmlFor="costInput">Cost</label>
                      <div className="input-group form-entry">
                        <div className="input-group-addon">$</div>
                        <input type="number" min = "0" step = "0.01" className="form-control" id="priceInput" placeholder="150.00"
                          value={this.state.price} onChange={(e) => this.handleChange(e)} />
                      </div>

                    <div className = "photo-entry">
                      <label htmlFor="conditionSelect">Condition</label>
                      <select className="form-control" id="conditionSelect" value={this.state.condition} onChange={(e) => this.handleChange(e)} >
                        <option selected>Choose...</option>
                        <option>New</option>
                        <option>Like New</option>
                        <option>Good Enough</option>
                        <option>Visibly Used</option>
                        <option>Poor</option>
                      </select>
                    </div>
          {/*          <div className="form-group form-entry">
                      <label className = "sr-only" htmlFor="conditionTextarea">Condition Description</label>
                      <textarea className="form-control textarea" id="conditionTextarea" rows="3" placeholder = "Describe the item here..."
                        value={this.state.conDesc} onChange={(e) => this.handleChange(e)} />
                    </div>
                    {/*<!--- End Main Submission Criteria --->*/}

                    {/*<!--- Start Submit Button --->*/}
                    <div className="form-group row">
                      <div className="col-md-3 sp24"></div>
                      <div className="col-md-3">
                        <button type="submit" className="btn btn-primary" onClick={(e) => this.handleSaveClick(e)}>Post for Sale</button>
                      </div>
                    </div>
                    {/*<!--- End Submit Button --->*/}


              </div>
            {/*<!--- End Left Side --->*/}


          {/*<!--- Start Right Side --->*/}

              <div className = "col-md-7" htmlStyle="padding-bottom: 50px;">

                <select id="classItems" className="form-control dropdown" onChange={(e) => this.handleClassItemSelection(e)}>
                  <option value = "none">Select Class Item</option>
                  <option value="000000000000000000000001">iClicker</option>
                  <option value="000000000000000000000002">Cracking the Code</option>
                  <option value="000000000000000000000003">Introductions to Algorithms</option>
                  <option value="000000000000000000000004">Artificial Intelligence</option>
                  <option value="000000000000000000000005">The Rules of Love</option>
                  <option value="000000000000000000000006">Unlock Your Educational Potental</option>
                </select>


                {/*<!--- Start Category Select --->*/}
                <div className = "col-md-12" htmlStyle = "padding-top: 15px;">
                  <h3 htmlStyle ="margin-bottom: 25px;">Select Applicable Categories</h3>
                  {/*<!--- Start Textbook --->*/}
                  <label className="form-check-label categoryEntry" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Textbook" checked={this.state.txtbxchked} onChange={(e) => this.handleCheckboxChange(e)}/> Textbook
                  </label>
    {/*              <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <label htmlStyle ="padding-left: 15px;">Author:</label>
                        </div>
                        <div className="col-md-9 pull-right">
                          <input type="text" className = "form-control thin" placeholder="ex. Leo Tolstoy" id="author"
                            value={this.state.author} onChange={(e) => this.handleChange(e)} />
                        </div>
                      </div>
                      <div className="row" htmlStyle ="padding-top:4px;">
                        <div className="col-md-3">
                          <label htmlStyle ="padding-left: 15px;">Edition:</label>
                        </div>
                        <div className="col-md-9">
                          <input type="number" className = "form-control thin" placeholder="00" id="edition"
                            value={this.state.edition} onChange={(e) => this.handleChange(e)} />
                        </div>
                      </div>
                    <div className = "form-check form-check-inline" htmlStyle ="padding-left: 15px; padding-top: 4px;">
                        <label className="form-check-label sp16">
                          <input className="form-check-input" type="radio" name="bookCoverOptions" id="hard" checked={this.state.hard} onChange={(e) => this.handleCheckboxChange(e)}/> Hardcover
                        </label>
                        <label className="form-check-label">
                          <input className="form-check-input" type="radio" name="bookCoverOptions" id="paper" checked={this.state.paper} onChange={(e) => this.handleCheckboxChange(e)}/> Paperback
                        </label>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                      <textarea className="form-control textarea" id="textbookTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.textbookDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>
                  </div>*/}
                  {/*<!--- End Textbook --->*/}
                  <hr />
                  {/*<!--- Start Clothing --->*/}
                  <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Clothing" checked={this.state.clothbxchked} onChange={(e) => this.handleCheckboxChange(e)}/> Clothing
                  </label>
    {/*               <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <label htmlStyle ="padding-left: 15px;">Size:</label>
                        </div>
                        <div className="col-md-4">
                          <select className="custom-select" id="clotheSelect" value={this.state.clotheSelect} onChange={(e) => this.handleChange(e)} >
                            <option selected>Choose...</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                          </select>
                        </div>
                        <div className="col-md-2">
                          <label htmlStyle ="padding-left: 5px;">OR</label>
                        </div>
                        <div className="col-md-4">
                          <input type="number" className = "form-control thin" placeholder="00" id="clotheNumber" value={this.state.clotheNumber} onChange={(e) => this.handleChange(e)}  />
                        </div>
                      </div>
                      <div className="row" htmlStyle ="padding-top:4px;">
                        <div className="col-md-2">
                          <label htmlStyle ="padding-left: 20px;">OR</label>
                        </div>
                        <div className="col-md-10">
                          <input type="text" className = "form-control thin" placeholder="ex. 32 waist, 32 length" id="clotheDetail" value={this.state.clotheDetail} onChange={(e) => this.handleChange(e)}  />
                        </div>
                      </div>
                    <div className = "form-check form-check-inline" htmlStyle ="padding-left: 15px; padding-top: 4px;">
                        <label className="form-check-label sp12">
                          <input className="form-check-input" type="checkbox" name="clothingOptions" id="adult" checked={this.state.adult} onChange={(e) => this.handleCheckboxChange(e)}/> Adult
                        </label>
                        <label className="form-check-label sp42">
                          <input className="form-check-input" type="checkbox" name="clothingOptions" id="child" checked={this.state.child} onChange={(e) => this.handleCheckboxChange(e)}/> Child
                        </label>
                        <label className="form-check-label sp12">
                          <input className="form-check-input" type="checkbox" name="clothingOptions" id="man"  checked={this.state.man} onChange={(e) => this.handleCheckboxChange(e)}/> Mens
                        </label>
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" name="clothingOptions" id="woman"  checked={this.state.woman} onChange={(e) => this.handleCheckboxChange(e)}/> Womens
                        </label>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                      <textarea className="form-control textarea" id="clothingTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.clothingDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>
                  </div>*/}
                  {/*<!--- End Clothing --->*/}
                  <hr />
                  {/*<!--- Start Tech --->*/}
                  <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Tech" checked={this.state.techbxchked} onChange={(e) => this.handleCheckboxChange(e)}/> Tech
                  </label>
  {/*                   <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                    <div className="left">
                      <textarea className="form-control textarea" id="techTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.techDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>*/}
                  {/*<!--- End Tech --->*/}
                  <hr />
                  {/*<!--- Start Events --->*/}
                  <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Events" checked={this.state.eventbxchked} onChange={(e) => this.handleCheckboxChange(e)}/> Events
                  </label>
    {/*                 <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                    <div className="left">
                      <textarea className="form-control textarea" id="eventTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.eventsDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>*/}
                {/*<!--- End Events --->*/}
                  <hr />
                  {/*<!--- Start Furniture --->*/}
                  <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Furniture" checked={this.state.furnbxchked} onChange={(e) => this.handleCheckboxChange(e)}/> Furniture
                  </label>
    {/*                 <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                    <div className="left">
                      <textarea className="form-control textarea" id="furnitureTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.furnitureDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>*/}
                {/*<!--- End Furniture --->*/}
                  <hr />
                  {/*<!--- Start Misc --->*/}
                  <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Miscellaneous" checked={this.state.miscbxchked} onChange={(e) => this.handleCheckboxChange(e)}/> Miscellaneous
                  </label>
    {/*               <div className="left">
                    <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                      <textarea className="form-control textarea" id="miscTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.miscDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>*/}
                {/*<!--- End Misc --->*/}

                  <hr />
                  <div className="form-group form-entry">
                    <label className = "sr-only" htmlFor="conditionTextarea">Condition Description</label>
                    <textarea className="form-control textarea" id="conditionTextarea" rows="3" placeholder = "Describe the item here..."
                      value={this.state.conDesc} onChange={(e) => this.handleChange(e)} />
                  </div>
                </div>

              </div>

          </form>

        </div>
      </div>


    )
  }
}
