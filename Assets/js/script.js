$(function() {
  // Function to update the current time
  function updateCurrentTime() {
    const currentDayElement = document.getElementById('currentDay');
    const currentTime = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    currentDayElement.textContent = currentTime;
  }

  // Retrieve the current hour and AM/PM marker
  var currentHour = dayjs().format('h');
  var amPmMarker = dayjs().format('A');

  // Apply the "past", "present", or "future" class to each time block
  var timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach(function(timeBlock) {
    var timeBlockId = timeBlock.id;
    var timeBlockHour = parseInt(timeBlockId.split('-')[1]);

    // Convert the time slot IDs to 24-hour format for accurate comparison
    if (amPmMarker === 'PM' && timeBlockHour !== 12) {
      timeBlockHour += 12;
    } else if (amPmMarker === 'AM' && timeBlockHour === 12) {
      timeBlockHour = 0;
    }

    if (timeBlockHour < currentHour) {
      timeBlock.classList.add('past');
    } else if (timeBlockHour === currentHour) {
      timeBlock.classList.add('present');
    } else {
      timeBlock.classList.add('future');
    }
  });

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

  // Call the function initially
  updateCurrentTime();

  // Update the current time every second
  setInterval(updateCurrentTime, 1000);
});