import {readDocument, writeDocument, addDocument, getArray} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 1);
}



export function getRecomendedItems(cb)
{

  var recomendeditemIndexList= getArray('recomendedItems'); //get array for items
  // console.log("item list is:");
  // console.log(recomendeditemIndexList);
  var recomendedItems = new Array(9);
  for (var i = 0; i < 9; i++) {
    //console.log("looking for: " + i + " with value of  " + recomendeditemIndexList[i]);
    recomendedItems[i] = readDocument("items", recomendeditemIndexList[i]); //actually get the items
     //console.log("actual result: ")
     //console.log(recomendedItems[i]);
  }


//console.log("size of recomended item list: " + recomendedItems.length);

  emulateServerReturn(recomendedItems, cb);
}

export function getSearch(search, cb) {
  var itemList= getArray('items'); //get array for items
  var refinedList = [];
  var index = 0;
  if (search[0] !== "") {
    var itemlistArray = Object.values(itemList);
    var itemListLength = itemlistArray.length;
    for (var i = 1; i < itemListLength+1; i++) { //loop through and see only add items that have the correct category.
      var itemArray = Object.values(itemList[i]);
      //console.log(itemArray);
      if (itemArray[6] === search[0]) {
          refinedList[index] = itemArray;
          index+=1;
        }
      }
  }
  //take the list of all items with correct category and then try to narrow them down further by applying hte search filter
  var searchResults = [];
  index = 0; //reset to 0 for next search
  for (var i = 1; i < refinedList.length; i++) {
    if (refinedList[i].Title === search[1] || refinedList[i]._id === search[1]) {
        searchResults[index] = refinedList[i];
        index+=1;
      }
 }
 if (searchResults.length < 2) {
   searchResults = refinedList; // for now
 }
 emulateServerReturn(searchResults, cb);
}

// Submit stuff from Submission Form
export function submitItem(data){
  var userData = readDocument('items', 1);
  var time = new Date().getTime();

  userData._id = (Object.keys(getArray('items')).length) + 1;
  userData.postDate = time;
  userData.title = data.title;
  userData.price = data.price;
  userData.condition = data.condition;
  userData.conditionDescription = data.conDesc;
  userData.classRelated = data.classRelated;
  userData.subject = data.subject;
  userData.courseNumber = data.courseNumber;
  userData.category = data.category;
  userData.categoryDescription = data.categoryDescription;
  userData.photoRef = "img/iclicker.jpg";
  userData.sold = false;
  userData.sellerId = 1;
  writeDocument('items', userData);
}

//export function submitItem(userID, title, price, condition,
//  conditionDescription, category, categoryDescription, cb) {
//  var time = new Date().getTime();
//  var newItem = {
//    "_id": getArray('items').length + 1,
//    "SellerID": userID,
//    "postDate": time,
//    "Title": title,
//    "Price": price,
//    "Condition": condition,
//    "ConditionDescription": conditionDescription,
//    "Description": categoryDescription,
//    "Sold": false,
//    "Category": category,
//    "photoRef": "img/iclicker.jpg"
//  };
//}

export function getUserData(user, cb){
  var userData = readDocument('users', user);
  userData.sellingList = userData.sellingList.map((itemId) => readDocument('items', itemId));
  emulateServerReturn(userData, cb);
}

export function updateUserData(data){
  var userData = readDocument('users', data._id);
  userData.Cellphone = data.Cellphone;
  userData.FirstName = data.FirstName;
  userData.LastName = data.LastName;
  userData.NickName = data.NickName;
  userData.Email = data.Email;
  userData.Password = data.Password;
  userData.Photo = data.Photo;
  writeDocument('users', userData);
}

export function updateSearchUserData(data, userID){
  var userData = readDocument('users', userID);
  userData.searchGory = data.searchGory;
  userData.searchTerm = data.searchTerm;
  writeDocument('users', userData);
}




export function getClassData(classID, cb) {
    //console.log(classID);
  var classData = readDocument('classes', classID);
  classData.textbookList = classData.textbookList.map((itemId) => readDocument('items', itemId));
  classData.techList = classData.techList.map((itemId) => readDocument('items', itemId));
  emulateServerReturn(classData, cb);
}

export function getItemInfo(itemID, cb) {
  var itemdata = readDocument('items', itemID);
  emulateServerReturn(itemdata, cb);
}
