function maxOfThree(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

console.log(maxOfThree(4, 3, 5));
