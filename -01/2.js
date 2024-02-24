function countVowels(str) {
  // Convert the string to lowercase to handle both uppercase and lowercase vowels
  str = str.toLowerCase();
  // Define the vowels
  const vowels = "aeiou";
  // Initialize a variable to count the number of vowels
  let count = 0;
  // Loop through each character in the string
  for (let char of str) {
    // Check if the character is a vowel
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Example usage:
const inputString = "Hello, World!";
console.log("Number of vowels:", countVowels(inputString));
