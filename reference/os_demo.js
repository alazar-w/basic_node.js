const os = require('os');

//platform
console.log("platform- " + os.platform());

//CPU Arch
console.log("Architecture- " + os.arch());
//cpu core Info
console.log( "number of cpus- " + os.cpus());

//Free Memory
console.log("Free memory- "  + os.freemem());

//Total Memory
console.log("Total memory- "  + os.totalmem());

//Home dir
console.log("Home dir- "  + os.homedir());

//upTime - Returns the system uptime in number of seconds.
console.log("upTime- " + os.uptime)