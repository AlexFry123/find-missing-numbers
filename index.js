// Task 1
function findMissingNumbersInSortedSequence(sequence, sequenceLimit) {
  const missingNumbers = [];
  let currentIndex = 0;

  for (
    let expectedNumber = 1;
    expectedNumber < sequenceLimit + 1;
    expectedNumber++
  ) {
    if (
      currentIndex < sequence.length &&
      sequence[currentIndex] === expectedNumber
    )
      currentIndex++;
    else missingNumbers.push(expectedNumber);
  }
  
  return missingNumbers;
}
// Test cases
// 1. Missing 1, 10
console.log(findMissingNumbersInSortedSequence([2, 3, 4, 5, 6, 7, 8, 9], 10)); 
// 2. Missing 1, 5
console.log(findMissingNumbersInSortedSequence([2, 3, 4, 6, 7, 8, 9, 10], 10)); 
// 3. Missing 3, 10
console.log(findMissingNumbersInSortedSequence([1, 2, 4, 5, 6, 7, 8, 9], 10)); 
// 4. Missing 2, 6
console.log(findMissingNumbersInSortedSequence([1, 3, 4, 5, 7, 8, 9, 10], 10)); 
// 5. Missing 7, 8
console.log(findMissingNumbersInSortedSequence([1, 2, 3, 4, 5, 6, 9, 10], 10));

// Task 2
/* O(n) - вычислительная сложность данного решения,
 * где n - верхняя граница последовательности
 */
