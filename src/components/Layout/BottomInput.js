import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const ButtomInput = ({ handleCreateNewArray, handleCreateNewArrayWithLength }) => {
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Row>
        <Col>
          <Button color="primary" outline onClick={() => handleCreateNewArray()}>
            Generate New Array
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button color="primary" outline onClick={() => handleCreateNewArrayWithLength(10)}>
            10
          </Button>
          <Button color="primary" outline onClick={() => handleCreateNewArrayWithLength(25)}>
            25
          </Button>
          <Button color="primary" outline onClick={() => handleCreateNewArrayWithLength(50)}>
            50
          </Button>
          <Button color="primary" outline onClick={() => handleCreateNewArrayWithLength(100)}>
            100
          </Button>
          <Button color="primary" outline onClick={() => handleCreateNewArrayWithLength(250)}>
            250
          </Button>
          <Button color="primary" outline onClick={() => handleCreateNewArrayWithLength(500)}>
            500
          </Button>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button color="primary" outline>
            Generate New Array
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ButtomInput;
