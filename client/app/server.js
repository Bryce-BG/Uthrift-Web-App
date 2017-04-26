
 var token = 'eyJpZCI6MX0='


  export function getClassData(classID, cb) {

    // We don't need to send a body, so pass in 'undefined' for the body.
    sendXHR('GET', '/classPage/' + classID, undefined, (xhr) => {
   // Call the callback with the data.
   cb(JSON.parse(xhr.responseText));
   });
 }

 export function getSearch(cat, term, cb) {
   // We don't need to send a body, so pass in 'undefined' for the body.
   sendXHR('GET', '/searchPage/' + cat + '/' + term, undefined, (xhr) => {
  // Call the callback with the data.
  cb(JSON.parse(xhr.responseText));
  });
}

export function getClassSearch(term, cb) {
  // We don't need to send a body, so pass in 'undefined' for the body.
  sendXHR('GET', '/searchPage/' + term, undefined, (xhr) => {
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
       UthriftError('Could not ' + verb + " " + resource + ": Received " + statusCode + " "); // + statusText + ": " + responseText);
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

/**
// Submit stuff from Submission Form
export function submitItem(data){
  var userData = readDocument('items', 1);
  var time = new Date().getTime();

  var itemID = (Object.keys(getArray('items')).length) + 1;
  userData._id = itemID;
  userData.postDate = time;
  userData.Title = data.title;
  userData.Price = data.price;
  userData.Condition = data.condition;
  userData.Description = data.conDesc;
  userData.classRelated = data.classRelated;
  userData.subject = data.subject;
  userData.courseNumber = data.courseNumber;
  userData.Category = data.category;
  userData.categoryDescription = data.categoryDescription;
  userData.photoRef = "img/iclicker.jpg";
  userData.Sold = false;
  userData.SellerId = 1;
  writeDocument('items', userData);

  //Update selling list by copying seller profile and adding item # to array
  var userInfo = readDocument('users', 1);
  userInfo.sellingList.push(itemID);
} */
// Submit stuff from Submission Form
export function submitItem(data, cb){
  sendXHR('POST', '/submissionForm', { //No idea what the file path is supposed to be here.
    itemId: data.itemId, //not sure what the userId is supposed to be. (don't want to mix it up with itemId)
    postDate: new Date().getTime(),
    Title: data.title,
    Price: data.price,
    Condition: data.condition,
    Description: data.conDesc,
    classRelated: data.classRelated,
    subject: data.subject,
    courseNumber: data.courseNumber,
    Category: data.category,
    categoryDescription: data.categoryDescription,
    photoRef: "img/iclicker.jpg",
    Sold: false,
    SellerId: data.SellerId
  }, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
  //Update selling list by copying seller profile and adding item # to array

}



export function getUserData(user, cb){
  sendXHR('GET', '/profile/' + user, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function updateUserData(data, cb){
  sendXHR('PUT', '/profile', {
    userId: data._id,
    firstname: data.FirstName,
    lastname: data.LastName,
    nickname: data.NickName,
    email: data.Email,
    password: data.Password,
    cellphone: data.Cellphone,
    photo: data.Photo
  },(xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function updateSearchUserData(data, userID){
  var userData = readDocument('users', userID);
  userData.searchGory = data.searchGory;
  userData.searchTerm = data.searchTerm;
  writeDocument('users', userData);
}


export function getItemInfo(itemID, cb) {
  sendXHR('GET', '/ItemPage/' + itemID, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getUserDataItem(id, user, cb) {
  sendXHR('GET', '/ItemPage/' + user +'/'+ id, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}
