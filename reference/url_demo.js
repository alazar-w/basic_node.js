const { request } = require('http');
const url = require('url');

const myUrl = new URL('http://mynewurl.com:8000/index.html?id=100&status=active&isAdmin=false');

//serialize url
console.log(myUrl.href)
console.log(myUrl.toString())

//get the host(root domain)
console.log(myUrl.host)

//host name - the difference b/n 'hostname' and 'host' is 'host name' doesn't include a port,if port is given
console.log(myUrl.hostname)

//path name
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search)

//params object
console.log(myUrl.searchParams);

//add params dynamically
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`))
