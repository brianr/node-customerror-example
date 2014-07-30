var CustError = require('./custom_error.js').CustError;

try {
  throw new Error("yo");
} catch (e) {
  console.log("creating custerror");
  var custErr = new CustError(e);
}

console.log("done");
