// This function generates a random interval between min and max values
export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateNewArray = (length) => {
  // create a new array
  const newArray = [];
  // push random numbers from 10 - 600.
  // Chart.js will use the number as the height of the bar
  for (let i = 0; i < length; i++) {
    newArray.push(randomIntFromInterval(10, 600));
  }
  return newArray;
};

export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
