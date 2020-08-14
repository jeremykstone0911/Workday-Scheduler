$(document).ready(function () {
  // onclick for Save Button
  $(".saveBtn").on("click", function () {
    // What to save
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save to localStorage
    localStorage.setItem(time, value);
  });

  function updateBlock() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      //grey divs before the present; red divs for current hour; green divs for future
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  // call function
  updateBlock();

  setInterval(updateBlock, 1000);
  //whatever you want to have run on a regularly scheduled time
  //in this instance it's updating the currentDay div
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:"));
  //then set how often you want the above code to run:

  //load saved data
  $("#nine .description").val(localStorage.getItem("nine"));
  $("#ten .description").val(localStorage.getItem("ten"));
  $("#eleven .description").val(localStorage.getItem("eleven"));
  $("#twelve .description").val(localStorage.getItem("twelve"));
  $("#one .description").val(localStorage.getItem("one"));
  $("#two .description").val(localStorage.getItem("two"));
  $("#three .description").val(localStorage.getItem("three"));
  $("#four .description").val(localStorage.getItem("four"));
  $("#five .description").val(localStorage.getItem("five"));
});
