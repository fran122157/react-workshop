/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick = () => this.setState({ date: new Date() })

  render() {
    const { date } = this.state;

    return (
    <div>
      <h1>Hello, world!</h1>
        <h2>
          It is {date.toLocaleTimeString()}.
        </h2>
    </div>
  );
  }
}

ReactDOM.render(
    <div>
      <Clock /> 
    </div>,
    document.getElementById('root')
);