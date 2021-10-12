import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../actions";
import { useSelector } from "react-redux";

const Signin = () => {
  const logged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Header>Log In Console</Card.Header>
      {!logged && (
        <Button variant="primary" onClick={() => dispatch(login())}>
          Sign In
        </Button>
      )}
      {!!logged && (
        <Button variant="danger" onClick={() => dispatch(login())}>
          Sign Out
        </Button>
      )}
    </Card>
  );
};

export default Signin;
