var express = require('express');
var app = express();

const PORT    = 3000;
const VERSION = "v1.0.0";

const APP_SYSTEM_ID = process.env.OS_SYSTEM_ID || "no-system-id-defined";

app.get('/', function (req, res) {
  res.send(`[ ${dateTime()} ] Hello World - Advance ${VERSION}  Port: ${PORT} SystemID: ${APP_SYSTEM_ID}`);
});

app.listen(PORT, function () {
  console.log( `Sample Docker App version: ${VERSION} is listening on port ${PORT}` );
});  


function dateTime() { 
  var d = new Date();
  return `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
}; 