import { updateChart, updateChartWithColors } from "../utility";

export const doInsertionSort = (chartReference) => {
  setTimeout(() => insertionSort(chartReference), 100);
};

const insertionSort = (chartReference) => {
  let chart = chartReference.current;
  const data = chart.data.datasets[0].data;
  const colors = chart.data.datasets[0].backgroundColor;
  const originalColor = "rgba(255, 99, 132, 0.2)";
  const timeoutSpeed = 50;
  let timeout = 0;

  for (let i = 1; i < data.length; i++) {
    let insertionValue = data[i];
    let j = i;

    while (j > 0 && data[j - 1] > insertionValue) {
      // color our current insertion value
      colors[i] = "blue";
      colors[j] = "yellow";
      timeout += timeoutSpeed;
      updateChartWithColors(data.slice(), colors.slice(), timeout, chart);

      data[j] = data[j - 1];
      j--;
      colors[j] = originalColor;
      timeout += timeoutSpeed;
      updateChartWithColors(data.slice(), colors.slice(), timeout, chart);
    }

    if (j !== i) {
      data[j] = insertionValue;
    }
  }
};
