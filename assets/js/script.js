// Current day ID element
let currentDateJqEl = $("#currentDay");
let currentDate = new Date();

currentDateJqEl.append(moment(currentDate).format("dddd, MMMM, Do"));

// Timeblocks element container
const containerJqEl = $(".container");
const timeblockJqEl = $("<div>").attr("class", "time-block");
containerEl.append(timeblockJqEl);

// Get the current day and display it at the top of the calendar

// Present timeblocks for standard business hours when the user scrolls down

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock.

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page.
