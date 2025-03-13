function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// Example usage:
const array = [5, 3, 8, 1, 2];
const sortedArray = sortArray(array);
console.log(sortedArray); // Output: [1, 2, 3, 5, 8]
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "olleh"