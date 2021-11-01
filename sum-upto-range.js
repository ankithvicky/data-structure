// // For loop upto the given range
function sumUpToRange(range) {
  let total_sum = 0;
  for (let i = 1; i <= range; i++) {
    total_sum += i;
  }
  return total_sum;
}

// Using some formula

function sumUpToRange(range) {
  return (range * (range + 1)) / 2;
}
console.log(sumUpToRange(4));
