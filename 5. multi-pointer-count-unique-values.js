function countUniqueValues1(input) {
  if (!input.length) return 0;
  if (input.length == 1) return 1;
  let sptr = 0;
  let eptr = 1;
  let unique_count = 1;
  while (eptr < input.length) {
    if (input[sptr] == input[eptr]) {
      eptr++;
    } else {
      unique_count++;
      sptr = eptr;
      eptr++;
    }
  }
  return unique_count;
}

function countUniqueValues(input) {
  if (!input.length) return 0;
  let i = 0;
  for (let j = 1; j < input.length; j++) {
    if (input[i] !== input[j]) {
      i++;
      input[i] = input[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
