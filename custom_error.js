var rollbar = require('rollbar');

rollbar.init('aaaabbbbccccddddeeeeffff00001111', {handler: 'nextTick'});

(function() {
  var CustError = function (errObj) {
    this.name = 'CustError';
    this.module = errObj.module || 'Unknown';
    this.entity = errObj.entity || 'Unknown';
    this.method = errObj.method || 'Unknown';
    this.date = errObj.date || new Date();
    this.error = errObj.error || new Error('Unknown');
    this.data = errObj.data || 'Unknown';
    this.message = errObj.message || 'Unknown';
    this.level = errObj.level || 'error';




    // Send error to Rollbar.
    var customRollbarData = {
      module: this.module,
      entity: this.entity,
      method: this.method,
      date: this.date,
      data: this.data,
      message: this.message
    }

    // TODO:  Only report to Rollbar if in production or staging.
    console.log("----- yooooo -----");
    //console.log('\r\n this.error:  ' + this.error);
    rollbar.handleErrorWithPayloadData(this.error, { level: this.level, custom: customRollbarData });
  }

  CustError.prototype = new Error();
  CustError.prototype.constructor = CustError;

  exports.CustError = CustError;

}).call(this);
