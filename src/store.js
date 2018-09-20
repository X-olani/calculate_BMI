import { createStore } from "redux";
const initialState = {
  healthy: ["Normal weight", "Overweight", "Obese", "Underweight"],
  userHealthy: "",
  userHeight: "",
  userWeight: "",
  BMI: ""
};

export const user_inputOfheight = evt => {
  console.log(evt.target.value);
  return {
    type: "height",
    height: evt.target.value
  };
};

export const user_inputOfweight = evt => {
  return {
    type: "weight",
    weight: evt.target.value
  };
};

export const Start_calculate = () => {
  return {
    type: "calculate"
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "height":
      return {
        ...state,
        userHeight: action.height
      };
    case "weight":
      return {
        ...state,
        userWeight: action.weight
      };
    case "calculate":
      let heigth_ofuser = state.userHeight;
      let weight_ofuser = state.userWeight;
      let a = heigth_ofuser / 100;
      let BMI = (weight_ofuser / (a * a)).toFixed(2);
      let counter;

      if (BMI >= 18.5 && BMI <= 25) {
        counter = 0;
      } else if (BMI > 25 && BMI <= 30) {
        counter = 1;
      } else if ((BMI = 30)) {
        counter = 2;
      } else if (BMI < 18.5) {
        counter = 3;
      }
      console.log(counter);
      return {
        ...state,
        BMI: BMI,
        userHealthy: state.healthy[counter]
      };
  }

  return state;
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
