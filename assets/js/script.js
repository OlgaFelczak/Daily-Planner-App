const workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Get the current day and display it at the top of the calendar
let currentDateJqEl = $("#currentDay");
let currentDate = new Date();
currentDateJqEl.append(moment(currentDate).format("dddd, MMMM, Do"));

// Timeblocks element container
const containerJqEl = $(".container");
const timeblockJqEl = $("<div>").attr("class", "time-block");
containerJqEl.append(timeblockJqEl);

// Present timeblocks for standard business hours when the user scrolls down
for (let i = 0; i < workingHours.length; i++) {
  const hour = workingHours[i];
  renderRow(hour);
}

function renderRow(hour) {
  const rowJqEl = $("<div>").attr("class", "row");

  // Textarea to allow a user to enter an event when they click a timeblock
  const textareaJqEl = $("<textarea>");
  const currentHour = Number(moment(new Date()).format("H"));
  // Color-code each timeblock based on past, present, and future when the timeblock is viewed
  if (hour < currentHour) {
    textareaJqEl.attr("class", "past");
  } else if (hour > currentHour) {
    textareaJqEl.attr("class", "future");
  } else {
    textareaJqEl.attr("class", "present");
  }
  // Retrieve events data from localstorage
  textareaJqEl.text(JSON.parse(localStorage.getItem(hour)));

  const hourJqEl = $("<div>").attr("class", "hour").text(hour);

  const buttonJqEl = $("<button>").attr("class", "saveBtn");
  // Persist events data between refreshes of a page
  buttonJqEl.on("click", function () {
    localStorage.setItem(hour, JSON.stringify(textareaJqEl.val()));
  });
  const buttonIconJqEl = $("<i>").attr("class", "fa-solid fa-floppy-disk");

  buttonJqEl.append(buttonIconJqEl);
  rowJqEl.append(hourJqEl);
  rowJqEl.append(textareaJqEl);
  rowJqEl.append(buttonJqEl);
  timeblockJqEl.append(rowJqEl);
}
