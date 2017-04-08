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
export function submitItem(data){
  var userData = readDocument('items', data._id);
  var time = new Date().getTime();
  
  userData._id = getArray('items').length + 1;
  userData.postDate = time;
  userData.title = data.FirstName;
  userData.price = data.LastName;
  userData.condition = data.NickName;
  userData.conditionDescription = data.Email;
  userData.category = data.Password;
  userData.categoryDescription = data.Photo;
  userData.photoRef = "img/iclicker.jpg";
  userData.sold = false;
  userData.sellerId = data.Cellphone;
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

export function getClassData(classID, cb) {
    //console.log(classID);
  var classData = readDocument('classes', classID);
  classData.textbookList = classData.textbookList.map((itemId) => readDocument('items', itemId));
  classData.techList = classData.techList.map((itemId) => readDocument('items', itemId));
  emulateServerReturn(classData, cb);
}
