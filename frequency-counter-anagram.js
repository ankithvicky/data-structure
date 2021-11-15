function validAnagram(source, target) {
  if (source.length != target.length) return false;
  let source_obj = {};
  for (let i = 0; i < source.length; i++) {
    source_obj[source[i]] = (source_obj[source[i]] || 0) + 1;
  }
  for (let i = 0; i < target.length; i++) {
    if (source_obj[target[i]]) {
      source_obj[target[i]]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
