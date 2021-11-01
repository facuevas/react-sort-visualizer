import { sleep } from "../utility";

export const bubbleSort = async (chartReference) => {
  let chart = chartReference.current;

  // reference our (currently) unsorted  array
  const data = chart.data.datasets[0].data;
  // reference our original colors
  const colors = chart.data.datasets[0].backgroundColor;
  //   // original color of the array bar
  //   const originalColor = "rgba(255, 99, 132, 0.2)";
  // meta for our data set
  console.log(colors);

  for (let i = 0; i < data.length - 1; i++) {
    let checkSwap = false;
    for (let j = 0; j < data.length - 1; j++) {
      // color our current comparison
      // colors[j] = "blue";
      // chart.data.datasets[0].backgroundColor = colors;

      // this updates the current comparison color
      chart.update();
      await sleep(100);

      if (data[j] > data[j + 1]) {
        // swap values
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;

        checkSwap = true;
      }
      // overwrite new colors
      //   colors[j] = originalColor;
      //   chart.data.datasets[0].backgroundColor = colors;
    }
    if (checkSwap === false) {
      break;
    }
    // colors[data.length - i - 1] = "#7cc746"; // color last element green
    // chart.data.datasets[0].backgroundColor = colors;
    chart.update();
  }
};
