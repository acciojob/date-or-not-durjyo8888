var isDate = function (input) {
  //   write your code here
	if (input instanceof Date) {
    return !isNaN(input);
  }

  // Check if the input is a string that can be parsed into a Date
  if (typeof input === 'string') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }

  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
