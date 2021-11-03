import { swap, updateChart, updateChartWithColors, arrayEquals } from "../utility";

export const testBubbleSort = async (chartReference, sortedArray) => {
  let chart = chartReference.current;
  const data = chart.data.datasets[0].data;
  let timeout = 0;
  const timeoutSpeed = 100;

  // check if array is already sorted
  if (arrayEquals(data, sortedArray)) return;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        swap(data, j, j + 1);
        timeout += timeoutSpeed;
        await updateChart(chart, data.slice(0), sortedArray.slice(0), timeout);
      }
    }
  }
};

export const doBubbleSort = (chartReference) => {
  setTimeout(() => bubbleSort(chartReference), 100);
};

const bubbleSort = (chartReference) => {
  let chart = chartReference.current;

  const data = chart.data.datasets[0].data;
  const colors = chart.data.datasets[0].backgroundColor;
  const originalColor = "rgba(255, 99, 132, 0.2)";
  const timeoutSpeed = 50;
  let timeout = 0;
  console.log(colors);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      colors[j] = "blue";
      timeout += timeoutSpeed;
      updateChartWithColors(data.slice(), colors.slice(), timeout, chart);

      if (data[j] > data[j + 1]) {
        // color the value we are going to swap to yellow
        colors[j + 1] = "yellow";

        swap(data, j, j + 1);

        timeout += timeoutSpeed;
        updateChartWithColors(data.slice(), colors.slice(), timeout, chart);
      }

      colors[j] = originalColor;
      timeout += timeoutSpeed;
      updateChartWithColors(data.slice(), colors.slice(), timeout, chart);
    }
    colors[data.length - i - 1] = "green"; // color last element green
    //timeout += timeoutSpeed;
    updateChartWithColors(data.slice(), colors.slice(), timeout, chart);
  }

  console.log(data);
};
