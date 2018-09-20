import React, { Component } from "react";

import "./App.css";

export const App = props => {
  const get_userInput = evt => props.get_input(evt);
  const get_weight = evt => props.get_weight(evt);
  const start = () => props.start();
  return (
    <div>
      <div className="main_div">
        <h1>Calculate your BMI</h1>

        <div className="content_div">
          <h2 className="bmi">
            Body mass index(BMI)=
            {props.BMI}
          </h2>
          <p className="health">{props.userHealthy}</p>
          <br />
          <br />
          <p>Height(cm): </p>
          <input onChange={get_userInput} />
          <br />
          <p>Weight(kg): </p>
          <input onChange={get_weight} />
          <br />

          <button onClick={start} className="start_button">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
