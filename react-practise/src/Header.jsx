import React from "react"; //Default Import

const CHECK = "Dinesh";
class Header extends React.Component {
  /**
   * state ->
   * lifecycle methods
   * <16.8
   * @returns
   */

  /**
   * jsx ->
   * 1. create element in const/let
   * 2.class , className
   * 3.for -> htmlFor
   * 4.{}=> expression
   * 5. true,false,undefined,null
   */
  render() {
    console.log(this.props);
    const { age, name } = this.props;
    return (
      <div>
        {age}
        {name}
        {/* {CHECK} {CHECK + "...."} {1 + 2 + 3} */}
      </div>
    );
  }
}

React.createElement("h6", "title", "Created");

export default Header;
