import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "X",
    };
    setTimeout(() => {
      //wrong
      // this.setState({count:this.state.count+ this.props.incr})
      this.setState((state, props) => {
        return {
          count: state.count + props.incr,
        };
      });
      console.log(this.state, "Chec");
      this.setState({ name: "MRx." });
    }, 5000);
  }

  handleClick = () => {
    this.setState({ name: "MR.Remo" });
  };
  render() {
    // this.setState({ name: "MRx." });
    console.log(this.state);
    return (
      <div>
        <h4>Count</h4>
        <h4>
          {this.state.count}
          {this.state.name}
        </h4>
        <button onClick={this.handleClick}>Run</button>
      </div>
    );
  }
}

export default Counter;
