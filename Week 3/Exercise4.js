// Week 3 Exercise 4
// @Iustin Desrobitu 2526313

os = require("os")
util = require("util")

console.log("[---SystemInfo---]\n")

console.log("Host Name: " + os.hostname())
console.log("User: " + util.inspect(os.userInfo()))
console.log("OS: " + os.platform() + " version: " + os.release())
console.log("CPU: " + util.inspect(os.cpus()))
console.log("Ram: " + os.totalmem() / 1000000000 + "gb")
console.log("Free: " + os.freemem() / 1000000000 + "gb")
console.log("Network: " + util.inspect(os.networkInterfaces()))
console.log("Uptime: " + (os.uptime())/3600 + " hours")
console.log("Directory: " + os.tmpdir() + "\n")

console.log("[---End---]")