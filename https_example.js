var https = require("https");
console.log("I did it!");

var options = {
  host: "www.example.com",
  path: "/"
};

var callback = function () {
  console.log("In response to handler callback");
}

console.log("I'm about to make a request");

https.request(options, callback).end();

console.log("I've made a request");

