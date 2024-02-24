function removeDuplicates(arr) {
  let uniqueArray = [];
  for (let element of arr) {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

console.log(removeDuplicates([3, 3, 4, 2, 5]));
