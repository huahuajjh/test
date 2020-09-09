var spawn = require("child_process").spawn;
var child = spawn("sh",["echo.sh","asd"]);
child.stdout.on("data",function(data){console.log(data.toString());});
