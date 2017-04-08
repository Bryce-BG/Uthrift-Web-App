import {readDocument, writeDocument, addDocument, getArray} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

export function getRecomendedItems(cb)
{
  var recomendeditemIndexList= getArray('recomendedItems2'); //get array for items
  //console.log("item list is:");
  //console.log(recomendeditemIndexList);
  var recomendedItems = new Array(3);
  for (var i = 1; i < 3; i++) {
    //console.log("looking for: " + i + " with value of  " + recomendeditemIndexList[i]);
    recomendedItems[i] = readDocument("items", recomendeditemIndexList[i]); //actually get the items
     //console.log("actual result: ")
     //console.log(recomendedItems[i]);
  }
//console.log("size of recomended item list: " + recomendedItems.length);
  emulateServerReturn(recomendedItems, cb);
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
