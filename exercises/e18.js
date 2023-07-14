/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroids = data.asteroids;
  let maxYear = asteroids[0].discoveryYear;
  let yearCounts = {};

  for (let asteroid of asteroids) {
    const discoveryYear = asteroid.discoveryYear;
    if (yearCounts[discoveryYear]) {
      yearCounts[discoveryYear]++;
    } else {
      yearCounts[discoveryYear] = 1;
    }

    if (yearCounts[discoveryYear] > yearCounts[maxYear]) {
      maxYear = discoveryYear;
    }
  }

  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
