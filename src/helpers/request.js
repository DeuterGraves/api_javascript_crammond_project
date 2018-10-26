//  require in local file w/ key


const Request = function (url) {
  this.url = url
}


Request.prototype.get = function (key) {
  const options = {}
  if (key) {
    options.headers = key;
  }
  return fetch(this.url, options)
    .then((response) => response.json());
};

module.exports = Request;
