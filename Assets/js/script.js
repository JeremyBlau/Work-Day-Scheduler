// Function to update the current time
function updateCurrentTime() {
  const currentDayElement = document.getElementById('currentDay');
  const currentTime = dayjs().format('dddd, MMMM D, YYYY h:mm A');
  currentDayElement.textContent = currentTime;
}
// Call the function initially
updateCurrentTime();
// Update the current time every second
setInterval(updateCurrentTime, 1000);

$(function () {
// Retrieve the current hour
var currentHour = dayjs().format('H');

// Add a click event listener to all save buttons
var saveButtons = document.querySelectorAll('.saveBtn');
saveButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the id of the parent time-block
    var timeBlockId = this.parentNode.id;

    // Get the user input from the textarea within the time-block
    var userInput = this.parentNode.querySelector('.description').value;

    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });
});

// Retrieve and set the saved values from local storage
for (var i = 1; i <= 24; i++) {
  var timeBlockId = 'hour-' + i;
  var savedValue = localStorage.getItem(timeBlockId);

  if (savedValue) {
    $('#' + timeBlockId + ' .description').val(savedValue);
  }
}
$(function() {
  // Retrieve the current hour
  var currentHour = dayjs().format('H');

  // Add a click event listener to all save buttons
  var saveButtons = document.querySelectorAll('.saveBtn');
  saveButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the id of the parent time-block
      var timeBlockId = this.parentNode.id;

      // Get the user input from the textarea within the time-block
      var userInput = this.parentNode.querySelector('.description').value;

      // Save the user input in local storage using the time-block id as the key
      localStorage.setItem(timeBlockId, userInput);
    });
  });
});
  // Apply the "past", "present", or "future" class to each time block
  var timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach(function(timeBlock) {
    var timeBlockHour = parseInt(timeBlock.id.split('-')[1]);

    if (timeBlockHour < currentHour) {
      timeBlock.classList.add('past');
    } else if (timeBlockHour === currentHour) {
      timeBlock.classList.add('present');
    } else {
      timeBlock.classList.add('future');
    }
  });
