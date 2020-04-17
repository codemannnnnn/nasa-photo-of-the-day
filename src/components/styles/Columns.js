import React from "react";
import {Container, Row, Col} from "reactstrap";

const Columns = props => {
  return (
    <Container>
      <Row xs="2">
        <Col>Cody</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
    </Container>
  );
};

export default Columns;
