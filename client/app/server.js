
 var token = 'eyJpZCI6MX0='


  export function getClassData(classID, cb) {

    // We don't need to send a body, so pass in 'undefined' for the body.
    sendXHR('GET', '/classPage/' + classID, undefined, (xhr) => {
   // Call the callback with the data.
   cb(JSON.parse(xhr.responseText));
   });
 }

 function sendXHR(verb, resource, body, cb) {
   var xhr = new XMLHttpRequest();
   xhr.open(verb, resource);
   xhr.setRequestHeader('Authorization', 'Bearer ' + token);

   // The below comment tells ESLint that FacebookError is a global.
   // Otherwise, ESLint would complain about it! (See what happens in Atom if
   // you remove the comment...)
   /* global UthriftError */

   // Response received from server. It could be a failure, though!
   xhr.addEventListener('load', function() {
     var statusCode = xhr.status;
     var statusText = xhr.statusText;
     if (statusCode >= 200 && statusCode < 300) {
       // Success: Status code is in the [200, 300) range.
       // Call the callback with the final XHR object.
       cb(xhr);
     } else {
       // Client or server error.
       // The server may have included some response text with details concerning
       // the error.
       var responseText = xhr.responseText;
       UthriftError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
     }
   });

   // Time out the request if it takes longer than 10,000
   // milliseconds (10 seconds)
   xhr.timeout = 10000;

   // Network failure: Could not connect to server.
   xhr.addEventListener('error', function() {
     UthriftError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
   });

   // Network failure: request took too long to complete.
   xhr.addEventListener('timeout', function() {
     UthriftError('Could not ' + verb + " " + resource +  ": Request timed out.");
   });

   switch (typeof(body)) {
     case 'undefined':
       // No body to send.
       xhr.send();
       break;
     case 'string':
       // Tell the server we are sending text.
       xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
       xhr.send(body);
       break;
     case 'object':
       // Tell the server we are sending JSON.
       xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
       // Convert body into a JSON string.
       xhr.send(JSON.stringify(body));
       break;
     default:
       throw new Error('Unknown body type: ' + typeof(body));
   }
 }







function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 1);
}




export function getRecomendedItems(cb)
{

sendXHR('GET', '/recomendedItems/1', undefined, (xhr) => {
  // Call the callback with the data.
  cb(JSON.parse(xhr.responseText));
});

  // var recomendeditemIndexList= getArray('recomendedItems'); //get array for items
  //
  // var recomendedItems = new Array(9);
  // for (var i = 0; i < 9; i++) {
  //
  //   recomendedItems[i] = readDocument("items", recomendeditemIndexList[i]); //actually get the items
  //   }
  //
  // emulateServerReturn(recomendedItems, cb);
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


export function getItemInfo(itemID, cb) {
  var itemdata = readDocument('items', itemID);
  emulateServerReturn(itemdata, cb);
}

export function getUserDataItem(id, user, cb) {
  var userData = readDocument('users', user);
  var itemData = readDocument('items', id);
  userData.sellingList = userData.sellingList.map((itemId) => readDocument('items', itemId));
  userData.viewingItem = itemData;

  emulateServerReturn(userData, cb);
}
