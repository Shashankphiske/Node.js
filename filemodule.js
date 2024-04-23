const {readFileSync, writeFileSync, read} = require("fs")
// this will take only the methods readflesync and writefilesync from the fs 
// this is called denomination

// utf8 is character encoding
const first = readFileSync('./folder/subfolder/text.txt','utf8')

writeFileSync(
    './folder/subfolder/test.txt',
    `The written value is : ${first}`//if you want to append in existing file just keep : ,{flag:'a'}
)// test.txt is not a file so it will make it and add the text
writeFileSync(
    './folder/subfolder/text.txt',
    `The written value is : ${first}`,
    {flag:'a'}//if you want to append in existing file just keep : ,{flag:'a'}
)