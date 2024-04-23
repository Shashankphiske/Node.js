const os = require("os")

console.log(`The System uptime is ${os.uptime}`)
const info = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(info)