import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actionsContainer/actionCreators";
import { getCount } from "../redux/selector/countSelector";
function ReduxExample(props) {
  const { increment, decrement, count } = props;
  return (
    <div>
      <input type="text" value={count} />
      <button onClick={() => increment(5)}>Increment</button>
      <button onClick={() => decrement(5)}>Decrement</button>
      {/* <button onClick={() => dispatch({ type: "reset" })}>Reset</button> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: getCount(state),
  };
};
const mapDispatchToprops = (dispach) => {
  return {
    increment: (number) => dispach(increment(number)),
    decrement: (number) => dispach(decrement(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(ReduxExample);
