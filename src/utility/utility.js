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

export const updateChartWithColors = (data, colors, timeout, chart) => {
  setTimeout(() => {
    chart.data.datasets[0].data = data;
    chart.data.datasets[0].backgroundColor = colors;
    chart.update();
  }, timeout);
};

export const updateChart = async (chart, data, sorted, timeout) => {
  //const newColors = await updateChartFrameColors(chart, data, sorted);
  setTimeout(() => {
    console.log(chart.data.datasets);
    chart.data.datasets[0].data = data;
    //chart.data.datasets[0].backgroundColor = newColors;
    chart.update(0);
  }, timeout);
};

const updateChartFrameColors = async (chart, data, sorted) => {
  // use the current data to update the colors of each
  let colors = chart.data.datasets[0].backgroundColor;
  for (let i = 0; i < data.length; i++) {
    if (sorted[i] === data[i]) {
      colors[i] = "green";
      continue;
    }
    if (sorted[i] !== data[i]) {
      colors[i] = "yellow";
      continue;
    }
    colors[i] = "blue";
  }
  return colors;
};

export const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const arrayEquals = (array, sortedArray) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sortedArray[i]) return false;
  }
  return true;
};
