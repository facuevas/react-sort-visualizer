import { sleep } from "../utility";

export const selectionSort = async (chartReference) => {
  let chart = chartReference.current;
  const data = chart.data.datasets[0].data;
  const sortedData = data.slice().sort((a, b) => a - b);
  const colors = chart.data.datasets[0].backgroundColor;
  const originalColor = "rgba(255, 99, 132, 0.2)";
  console.log(sortedData);

  for (let i = 0; i < data.length - 1; i++) {
    let min = i;
    // our current min value will be colored yellow
    colors[min] = "yellow";
    chart.data.datasets[0].backgroundColor = colors;
    chart.update();
    await sleep(100);

    for (let j = i + 1; j < data.length; j++) {
      // our comparison values will be blue
      colors[j] = "blue";
      chart.data.datasets[0].backgroundColor = colors;
      chart.update();
      await sleep(100);

      // if there is a new minimum, we will use that to compare
      if (data[j] < data[min]) {
        colors[min] = originalColor;
        min = j;
        colors[min] = "yellow";
        chart.data.datasets[0].backgroundColor = colors;
        chart.update();
        await sleep(100);
      } else {
        colors[j] = originalColor;
        chart.data.datasets[0].backgroundColor = colors;
        chart.update();
        sleep(100);
      }
    }
    // swap our min value with where we currently are
    if (min !== i) {
      let temp = data[min];
      data[min] = data[i];
      data[i] = temp;
      colors[i] = "green";
      chart.data.datasets[0].backgroundColor = colors;
    }

    chart.update();
  }
};
