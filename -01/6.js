function indexOfElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1; // Element not found
}

console.log(indexOfElement([2, 3, 4, 52, 2], 4));
