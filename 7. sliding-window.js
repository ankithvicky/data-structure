function maxSubArraySum(input_array, range) {
  if (input_array.length < range) return null;
  let window_total = 0;
  let pointer = range;
  for (let i = 0; i < range; i++) {
    window_total += input_array[i];
  }
  let max_value = window_total;
  while (pointer < input_array.length) {
    let current_total =
      input_array[pointer] + window_total - input_array[pointer - range];
    max_value = Math.max(max_value, current_total);
    window_total = current_total;
    pointer++;
  }
  return max_value;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null
