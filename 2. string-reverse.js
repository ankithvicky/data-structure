// Using reverse for loop
function reverseString(input_string) {
  let reversed_string = "";
  for (let i = input_string.length - 1; i >= 0; i--) {
    reversed_string += input_string[i];
  }
  return reversed_string;
}

// Using reverse while loop
function reverseString(input_string) {
  let current_index = input_string.length - 1;
  let reversed_string = "";
  while (current_index >= 0) {
    reversed_string += input_string[current_index];
    current_index--;
  }
  return reversed_string;
}

// Using inbuild functions
function reverseString(input_string) {
  return input_string.split("").reverse().join("");
}

console.log(reverseString("vicky"));
