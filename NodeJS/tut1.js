let fs = require('fs');

let text = fs.readFileSync('randomFile','utf-8')
text = text.replace("Kamal", "Gulabo")
console.log(text)

console.log("Creating a new File......")
fs.writeFileSync("gulabo.txt", text)