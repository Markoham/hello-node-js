var fs = require('fs');

var folder = "./task-5";

var fol = fs.readdirSync(folder);

fol.forEach(function(item)
{
    if(fs.statSync(folder + "/" + item).isFile())
        console.log("FILE: " + item);
    else
        console.log("FOLDER: " + item);
});