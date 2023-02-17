const express = require('express')
const app = express()
let port = 3001;
//to avoid xmlhttprequest at blocked by cors
const cors = require("cors");
app.use(cors());
const { exec } = require('child_process');

// Define the paths and commands to be executed
// const path1 = "C:/Users/VHR03/git/projects/commandtest1";
const path = '../figmatokens';
const command1 = "git pull origin main";

const command2 = "style-dictionary build";
const command3 = "node index.js";


// Define a function to run the commands in the specified path
function runCommand(path, command) {
  exec(command, { cwd: path }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    console.log(`Output: ${stdout}`);
  });
}



// respond with "hello world" when a GET request is made to the homepage
app.post('/pullrepo', (req, res) => {
    // runCommand(path, command1);
    runCommand(path, command1);
    res.send('hello world')
})
app.post('/converter', (req, res) => {
    // runCommand(path, command1);
    runCommand(path, command2);
    res.send('hello world')
})
app.post('/runserver', (req, res) => {
    // runCommand(path, command1);
    runCommand(path, command3);
    res.send('hello world')
})


//Listen On Server
app.listen(port,function (err) {
        console.log(`Server Started At Port ${port}`);  
});