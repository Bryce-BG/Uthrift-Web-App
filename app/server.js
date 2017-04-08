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


// Submit stuff from Submission Form
export function submitItem(userID, location, contents, cb) {
  // If we were implementing this for real on an actual server, we would check
  // that the user ID is correct & matches the authenticated user. But since
  // we're mocking it, we can be less strict.

  // Get the current UNIX time.
  var time = new Date().getTime();
  // The new item submission. The database will assign the ID for us.
  var newItem = {
    "_id": getArray('items').length + 1,
    "SellerID": userID,
    "postDate": time,
    "Title": "iclicker",
    "Price": "10,000",
    "Description": "this is an iclicker item",
    "Condition": "Brand New",
    "Sold": false,
    "Category": "Tech",
    "photoRef": "img/iclicker.jpg"
  };

  // Add the status update to the database.
  // Returns the status update w/ an ID assigned.
  newItem = addDocument('items', newItem);

  // Return the newly-posted object.
  emulateServerReturn(newItem, cb);
}

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

export function getClassData(classID, cb) {
    console.log(classID);
  var classData = readDocument('classes', classID);
  classData.textbookList = classData.textbookList.map((itemId) => readDocument('items', itemId));
  classData.techList = classData.techList.map((itemId) => readDocument('items', itemId));
  emulateServerReturn(classData, cb);
}
