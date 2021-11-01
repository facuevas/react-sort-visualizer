import { sleep } from "../utility";

export const insertionSort = async (chartReference) => {
  let chart = chartReference.current;
  const data = chart.data.datasets[0].data;

  for (let i = 1; i < data.length; i++) {
    let insertionValue = data[i];
    let j = i;
    while (j > 0 && data[j - 1] > insertionValue) {
      data[j] = data[j - 1];
      j--;
      chart.update();
      await sleep(100);
    }

    if (j !== i) {
      data[j] = insertionValue;
    }
    chart.update();
  }
};
