function binarySearch(input, element) {
  let min = 0;
  let max = input.length - 1;

  while (min <= max) {
    let mid_point = Math.floor((min + max) / 2);
    let mid_element = input[mid_point];
    if (mid_element > element) {
      max = mid_element - 1;
    } else if (mid_element < element) {
      min = mid_point + 1;
    } else {
      return mid_point;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], 11)); // -1
