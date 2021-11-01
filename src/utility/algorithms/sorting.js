import { sleep } from "../utility";

export const bubbleSort = async (reference) => {
  // grab the reference of the chart
  // store as a let because we will be updating it
  let chart = reference.current;

  //our data array
  const dataArray = chart.data.datasets[0].data;
  const meta = chart.getDatasetMeta(0);
  const colors = chart.data.datasets[0].backgroundColor;
  const defaultColor = "yellow";
  let temp;

  for (let i = 0; i < dataArray.length; i++) {
    for (let j = 0; j < dataArray.length - i - 1; j++) {
      colors[j] = "blue";
      chart.data.datasets[0].backgroundColor = colors;

      chart.update();
      await sleep(10);

      if (dataArray[j] > dataArray[j + 1]) {
        temp = dataArray[j];
        dataArray[j] = dataArray[j + 1];
        dataArray[j + 1] = temp;

        temp = meta.data[j];
        meta.data[j] = meta.data[j + 1];
        meta.data[j + 1] = temp;

        colors[j + 1] = "red";
      }

      colors[j] = defaultColor;
      chart.data.datasets[0].backgroundColor = colors;
    }
    colors[dataArray.length - i - 1] = "green";
    chart.data.datasets[0].backgroundColor = colors;
    chart.update();
  }
};

export const insertionSort = async (reference) => {
  // grab the reference of the chart
  // store as a let because we will be updating it
  let chart = reference.current;

  //our data array
  const dataArray = chart.data.datasets[0].data;
  const meta = chart.getDatasetMeta(0);
  const colors = chart.data.datasets[0].backgroundColor;
  const defaultColor = "yellow";

  for (let i = 1; i < dataArray.length; i++) {
    let insertValue = dataArray[i];
    colors[i] = "blue";
    chart.data.datasets[0].backgroundColor = colors;

    chart.update();
    await sleep(10);

    let j = i;
    while (j > 0 && dataArray[j - 1] > insertValue) {
      dataArray[j] = dataArray[j - 1];
      meta.data[j] = meta.data[j - 1];
      colors[j] = "red";
      colors[j - 1] = defaultColor;

      j--;
    }

    chart.data.datasets[0].backgroundColor = colors;

    if (j !== i) {
      dataArray[j] = insertValue;
      meta.data[j] = meta.data[i];
      colors[i] = "green";
    }
    chart.data.datasets[0].backgroundColor = colors;
    chart.update();
  }
  console.log(dataArray);
};
