import { connect } from "react-redux";
import {
  user_inputOfheight,
  user_inputOfweight,
  Start_calculate
} from "./store";
import { App } from "./App";

const mapStateToProps = state => ({
  userHeight: state.userHeight,
  userWeight: state.userWeight,
  BMI: state.BMI,
  userHealthy: state.userHealthy
});

const mapDispatchToProps = dispatch => {
  const get_input = evt => dispatch(user_inputOfheight(evt));
  const get_weight = evt => dispatch(user_inputOfweight(evt));
  const start = () => dispatch(Start_calculate());
  return {
    get_input: get_input,
    get_weight: get_weight,
    start: start
  };
};

export const Component = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
