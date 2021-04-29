let fs = require('fs');

let text = fs.readFile('randomFile', 'utf-8', (err, data)=> {
    console.log(data)
})

console.log("Printing the data")