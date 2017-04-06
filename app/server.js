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
