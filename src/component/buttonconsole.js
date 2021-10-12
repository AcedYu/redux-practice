import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const Buttonconsole = () => {
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Header>Button Console</Card.Header>
      <Button variant="primary" onClick={() => dispatch(increment())}>
        +
      </Button>
      <Button variant="danger" onClick={() => dispatch(decrement())}>
        -
      </Button>
    </Card>
  );
};

export default Buttonconsole;
