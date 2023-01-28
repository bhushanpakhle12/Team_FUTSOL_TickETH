function createFile() {
  const fs = require("fs")


for(let i = 0; i < 5; i++) {
  fs.writeFile("../tickets/" + i + ".txt", "Hey there" + i, function(err) {
    if(err) {
      return console.log(err)
    }
    console.log("The file was created")
    
  })
}
}
createFile()

// let commands = ["cd ../tickets", "ipfs init", "ipfs add 0 -r"]
// for(let i = 0; i < commands.length; i++) {
//   var exec = require(commands[i]);

// exec(commands[i],
//     function (error, stdout, stderr) {
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//         if (error !== null) {
//           console.log('exec error: ' + error);
//         }
//     });
//     console.log("Command " + i + " executed")
// }