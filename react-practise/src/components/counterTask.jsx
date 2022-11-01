import React from "react";

class CounterTask extends React.Component {
  state = {
    counter: 1,
  };

  handleStart = () => {
    //StartInc
  };

  handleStop = () => {
    //needs to stop incr
  };

  handleINcr = () => {
    // incr 1 in state
  };
  render() {
    return (
      <div>
        <h4>Counter : {this.state.counter}</h4>
        <button onClick={this.handleStart}>Run</button>
        <button onClick={this.handleStop}>stop</button>
        <button onClick={this.handleINcr}>INcr BY 1</button>
      </div>
    );
  }
}

export default CounterTask;
