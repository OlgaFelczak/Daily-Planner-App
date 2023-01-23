let currentDateJqEl = $("#currentDay");
let currentDate = new Date();

// Get the current day and display it at the top of the calendar
currentDateJqEl.append(moment(currentDate).format("dddd, MMMM, Do"));

// Timeblocks element container
const containerJqEl = $(".container");
const timeblockJqEl = $("<div>").attr("class", "time-block");
containerJqEl.append(timeblockJqEl);

function renderRow(hour) {
  const rowJqEl = $("<div>").attr("class", "row");

  const textareaJqEl = $("<textarea>");
  const currentHour = Number(moment(new Date()).format("H"));
  if (hour < currentHour) {
    textareaJqEl.attr("class", "past");
  } else if (hour > currentHour) {
    textareaJqEl.attr("class", "future");
  } else {
    textareaJqEl.attr("class", "present");
  }

  const hourJqEl = $("<div>").attr("class", "hour").text(hour);
  const buttonJqEl = $("<button>").attr("class", "saveBtn");
  const buttonIconJqEl = $("<i>").attr("class", "fa-solid fa-floppy-disk");


  buttonJqEl.append(buttonIconJqEl);
  rowJqEl.append(hourJqEl);
  rowJqEl.append(textareaJqEl);
  rowJqEl.append(buttonJqEl);
  timeblockJqEl.append(rowJqEl);
}
renderRow(9);
renderRow(18);
renderRow(20);

{
  /* <div class="time-block">
  <div class="row">
    <div class="hour">09</div>
    <textarea class="past"></textarea>
    <button class="saveBtn">
      <i class="fa-solid fa-floppy-disk"></i>
    </button>
  </div>
  <div class="row">
    <div class="hour">10</div>
    <textarea class="present"></textarea>
    <button class="saveBtn">
      <i class="fa-solid fa-floppy-disk"></i>
    </button>
  </div>
  <div class="row">
    <div class="hour">11</div>
    <textarea class="future">sdfuasiudyfiu</textarea>
    <button class="saveBtn">
      <i class="fa-solid fa-floppy-disk"></i>
    </button>
  </div>
</div>; */
}

// Present timeblocks for standard business hours when the user scrolls down

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock.

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page.
