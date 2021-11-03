import React, { useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Button, Container } from "reactstrap";
import BottomInput from "../Layout/BottomInput.js";
import { generateNewArray } from "../../utility/utility";
import { doBubbleSort, testBubbleSort } from "../../utility/algorithms/bubbleSort.js";
import { doInsertionSort, testInsertionSort } from "../../utility/algorithms/insertionSort.js";
import { selectionSort } from "../../utility/algorithms/selectionSort.js";
import { mergeSort } from "../../utility/algorithms/mergeSort.js";

const SortVisualizer = () => {
  // states for our array to sort and the length of the array to sort
  const [length, setLength] = useState(100);
  const [array, setArray] = useState(generateNewArray(length));
  const [sortedArray, setSortedArray] = useState(array.slice().sort((a, b) => a - b));
  const [isRunning, setIsRunning] = useState(false);

  // get the reference for our chart
  const chartReference = useRef(null);

  // data for our Chart.js
  const data = {
    labels: array,
    datasets: [
      {
        label: "Bubble Sort",
        data: array,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // create a new array with the current length
  const handleCreateNewArray = () => {
    setArray(generateNewArray(length));
    setSortedArray(array.slice().sort((a, b) => a - b));
  };

  // creates a new array with a new specified length
  const handleCreateNewArrayWithLength = (length) => {
    setLength(length);
    setArray(generateNewArray(length));
    setSortedArray(array.slice().sort((a, b) => a - b));
  };

  return (
    <Container>
      <Bar data={data} options={options} ref={chartReference} />
      <BottomInput
        handleCreateNewArray={handleCreateNewArray}
        handleCreateNewArrayWithLength={handleCreateNewArrayWithLength}
      />
      <Button
        color="success"
        outline
        style={{ marginTop: "1rem" }}
        onClick={() => testBubbleSort(chartReference, sortedArray)}
      >
        BUBBLE SORT
      </Button>
      <Button
        color="success"
        outline
        style={{ marginTop: "1rem" }}
        onClick={() => testInsertionSort(chartReference, sortedArray)}
      >
        INSERTION SORT
      </Button>
      <Button
        color="success"
        outline
        style={{ marginTop: "1rem" }}
        onClick={() => selectionSort(chartReference)}
      >
        SELECTION SORT
      </Button>
      <Button
        color="success"
        outline
        style={{ marginTop: "1rem" }}
        onClick={() => mergeSort(chartReference)}
      >
        MERGE SORT
      </Button>
      <Button
        color="danger"
        outline
        style={{ marginTop: "1rem" }}
        onClick={() => {
          chartReference.current.stop();
          chartReference.current.destroy();
        }}
      >
        STOP
      </Button>
    </Container>
  );
};

// options for our bar graph using Chart.js
const options = {
  legend: {
    display: false,
  },
  // these options turn off the scales
  scales: {
    yAxes: {
      display: false,
    },
    xAxes: {
      display: false,
    },
  },
  // this option gets rid off the labels
  plugins: {
    legend: {
      display: false,
    },
  },
  // disabl tooltips
  tooltips: {
    enabled: false,
  },
  // disables hover mode
  events: [],
};

export default SortVisualizer;
