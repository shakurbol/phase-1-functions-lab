// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); 
  }
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free.
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet.
    } else if (distanceInFeet <= 2500) {
      return 25; // Flat fare for distance between 2000 and 2500 feet.
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet.
    }
  }
  