const { log } = require('console')
const path = require('path')

console.log(path.sep)
const pathname = path.join("/folder","subfolderḍ","text.txt")

const base = path.basename(pathname)

const absolute = path.resolve(__dirname,"folder","subfolder","text.txt")

console.log(pathname)
console.log(base)
console.log(absolute)