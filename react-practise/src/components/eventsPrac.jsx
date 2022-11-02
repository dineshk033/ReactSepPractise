import React from "react";

class EventPrac extends React.Component {
  state = {
    visible: true,
  };

  handleClick() {
    console.log(this.state.visible);
  }
  //common pattern to avoid this problem
  handleArClick = () => {
    console.log(this.state.visible);
  };

  handleSubmit = (e) => {
    // moving to next page is prevented using prevent default
    // return false not work in React
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h4>Event Handler - {this.state.visible.toString()}</h4>
        {/* Binding this method to current class */}
        <button onClick={this.handleClick.bind(this)}>Toggle Button</button>
        {/* Arrow function inside we are invoking handleClick */}
        <button onClick={() => this.handleClick()}>Toggle Button</button>
        {/* help of arrow we solve bind issue, this one is most coommonly used pattern */}
        <button onClick={this.handleArClick}>Toggle Button</button>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EventPrac;
