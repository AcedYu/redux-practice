import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

import Buttonconsole from "./component/buttonconsole";
import Signin from "./component/signin";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.isLogged);
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <Buttonconsole />
      <h1>
        Login Status: {!logged && "False"} {!!logged && "True"}
      </h1>
      <Signin />
    </div>
  );
};

export default App;
