function sumZero(input) {
  let sptr = 0;
  let eptr = input.length - 1;
  while (sptr < eptr) {
    let res = input[sptr] + input[eptr];
    if (res > 0) {
      eptr--;
    } else if (res < 0) {
      sptr++;
    } else {
      return [input[sptr], input[eptr]];
    }
  }
  return null;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
