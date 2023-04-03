import React, { Component } from "react";
import CounterButton from "./CounterButton";
class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="f2">FINDI FRIENDS</h1>;
        <CounterButton color={"red"} />
      </div>
    );
  }
}

export default Header;
