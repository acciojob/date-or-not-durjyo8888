var isDate = function (input) {
  //   write your code here
	 if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // Check if it's a valid date string
  if (typeof input === 'string') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }

  // Check for UNIX timestamp
  if (typeof input === 'number') {
    const dateFromTimestamp = new Date(input);
    return !isNaN(dateFromTimestamp);
  }

  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
