import { sleep } from "../utility";

export const mergeSort = async (chartReference) => {
  let chart = chartReference.current;
  const data = chart.data.datasets[0].data;
  doMergeSort(data, 0, data.length - 1, chart);
  console.log(data);
};

const doMergeSort = async (data, lo, hi, chart) => {
  if (hi - lo > 1) {
    const mid = lo + ((hi - lo) >> 1);
    doMergeSort(data, lo, mid, chart);
    doMergeSort(data, mid, hi, chart);
    merge(data, lo, mid, hi, chart);
  }
};

const merge = async (data, lo, mid, hi, chart) => {
  const temp = [];
  const length = mid - lo;
  let i, j, k;

  // save left sub-array
  for (i = 0; i < length; i++) {
    // animate here
    temp[i] = data[lo + i];
    chart.update();
    await sleep(100);
  }

  // merge subarrays
  i = 0;
  j = mid;
  k = lo;

  while (i < length && j < hi) {
    if (temp[i] <= data[j]) {
      //animate this move
      data[k++] = temp[i++];
      chart.update();
      await sleep(100);
    } else {
      //animate this move
      data[k++] = data[j++];
      chart.update();
      await sleep(100);
    }
  }

  // copy the remaining elements
  while (i < length) {
    //animate this move
    data[k++] = temp[i++];
    chart.update();
    await sleep(100);
  }
};
