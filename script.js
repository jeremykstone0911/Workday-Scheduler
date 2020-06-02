//Header displays current time
// The current day//
window.onload = function () {
  var today = new Date();
  date = moment().format("LL");

  $("#currentDay").html(date);
};

var workHours = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

//example code for setting up a timer
//setinterval requires two parameters - function, and the time that you want it to run
setInterval(function () {
  //whatever you want to have run on a regularly scheduled time
  //in this instance it's updating the currentDay div
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  //then set how often you want the above code to run:
}, 1000);

//8 divs representing each hour from 9-5

//grey divs before the present; red divs for current hour; green divs for future

//third column is save which saves to local storage

//
