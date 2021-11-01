// looping source array and reducing the stored formatted target array
function squareExistInTargetArray(source_array, target_array) {
  if (source_array.length != target_array.length) return false;
  let target_formatted_obj = target_array.reduce((a, c) => {
    a[c] = (a[target_array] || 0) + 1;
    return a;
  }, {});
  for (let element of source_array) {
    let squared_value = Math.pow(element, 2);
    if (target_formatted_obj[squared_value]) {
      target_formatted_obj[squared_value]--;
    } else {
      return false;
    }
  }
  return true;
}

// Using frequence counter pattern
function squareExistInTargetArray(source_array, target_array) {
  if (source_array.length != target_array.length) return false;
  let source_formatted = {};
  let target_formatted = {};
  source_array.forEach((element) => {
    source_formatted[element] = (source_formatted[element] || 0) + 1;
  });
  target_array.forEach((element) => {
    target_formatted[element] = (target_formatted[element] || 0) + 1;
  });
  for (let key in source_formatted) {
    let squared_value = key ** 2;
    if (!(squared_value in target_formatted)) return false;
    if (target_formatted[squared_value] != source_formatted[key]) return false;
  }
  return true;
}

console.log(squareExistInTargetArray([1, 2, 3], [4, 1, 9]));
console.log(squareExistInTargetArray([1, 2, 3], [1, 9]));
console.log(squareExistInTargetArray([1, 2, 1], [4, 4, 1]));
