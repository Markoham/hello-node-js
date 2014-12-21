var file = require("./task-3_module.js");
var moment = require('moment');
moment.locale("fi");

var filename = process.argv[2];

function formatDate(ts)
{
  return moment(ts).format("L HH:mm:ss");
}

console.log(formatDate(file.getFileDate(filename)));