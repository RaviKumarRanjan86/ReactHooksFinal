import React from "react";

class ClassTimerTwo extends React.Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0
    };
  }

  componentDidUpdate() {
    this.interval = setInterval(() => {
      this.setState((prevState) =>
        this.setState({ timer: prevState.timer + 1 })
      );
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h1>Class Timer : {this.timer}</h1>
      </>
    );
  }
}

export default ClassTimerTwo;
