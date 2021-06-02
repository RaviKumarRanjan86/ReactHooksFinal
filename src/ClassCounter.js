import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  componentDidMount(props, prev) {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}

export default ClassCounter;
