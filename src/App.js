import React from "react";
import { connect } from "react-redux";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>Current Experience: {this.props.experience}</div>
        <button onClick={this.props.onExperienceUp}>UP</button>
        <button onClick={this.props.onExperienceDown}>Down</button>
        <br></br>
        <br></br>
        <br></br>
        <div>Counter:{this.props.counter}</div>
        <button
          onClick={() => {
            this.props.onIncrement(2);
          }}
        >
          UP
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    experience: state.experience,
    counter: state.counter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onExperienceUp: () => dispatch({ type: "EXP_UP" }),
    onExperienceDown: () => dispatch({ type: "EXP_DOWN" }),
    onIncrement: (incrementBy) => dispatch({
      type: "INC", payload: {
        id: incrementBy
      }
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
