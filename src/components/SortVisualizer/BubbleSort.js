import React, { useState, useEffect, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import { Container, Button, Row, Col } from "reactstrap";
import { randomIntFromInterval } from "../../utility/utility";

const BubbleSort = () => {
  const [array, setArray] = useState([]);
  const [length, setLength] = useState(100);

  const generateNewArrayHandler = useCallback(() => {
    // create a new array
    const newArray = [];
    // push random numbers from 10 - 600.
    // Chart.js will use the number as the height of the bar
    for (let i = 0; i < length; i++) {
      newArray.push(randomIntFromInterval(10, 600));
    }
    setArray(newArray);
  }, [length]);

  useEffect(() => {
    generateNewArrayHandler();
    console.log(array);
  }, [array, generateNewArrayHandler]);

  const generateNewArrayWithNewLength = async (newLength) => {
    setLength(newLength);
    await generateNewArrayHandler();
  };

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

  return (
    <Container>
      <Bar data={data} options={options} />
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <Col>
            <Button color="primary" outline onClick={() => generateNewArrayHandler()}>
              Generate New Array
            </Button>
          </Col>
          <Col>
            <Button color="primary" outline onClick={() => generateNewArrayWithNewLength(10)}>
              10
            </Button>
            <Button color="primary" outline onClick={() => generateNewArrayWithNewLength(25)}>
              25
            </Button>
            <Button color="primary" outline onClick={() => generateNewArrayHandler()}>
              50
            </Button>
            <Button color="primary" outline onClick={() => generateNewArrayHandler()}>
              100
            </Button>
            <Button color="primary" outline onClick={() => generateNewArrayHandler()}>
              250
            </Button>
            <Button color="primary" outline onClick={() => generateNewArrayHandler()}>
              500
            </Button>
          </Col>
          <Col>
            <Button color="primary" outline onClick={() => generateNewArrayHandler()}>
              Generate New Array
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

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

export default BubbleSort;
