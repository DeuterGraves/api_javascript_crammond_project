// require the stuffs here
const Request = require("./helpers/request.js")
const TideTimes = require("./models/tide_times.js")

document.addEventListener("DOMContentLoaded", () => {
  console.log("Javascript Loaded - WE'RE FINALLY DOING THIS!!!");

  // call your bind events!

  // iteration 1 - get data to here...
  const tideTimes = new TideTimes();
  tideTimes.getData()
});
