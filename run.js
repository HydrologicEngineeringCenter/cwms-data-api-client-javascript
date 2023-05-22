var CwmsRadar = require('./clients/javascript/src/index');


var api = new CwmsRadar.OfficesApi()
var opts = {};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getCwmsDataBlobs(opts, callback);