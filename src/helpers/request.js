//  require in local file w/ key
const Key = require("../key.js");


const Request = function (url, {headers: Key}) {
  this.url = url
}

Request.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

module.exports = Request;
