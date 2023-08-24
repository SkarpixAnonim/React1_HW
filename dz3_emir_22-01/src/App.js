import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  Click = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  render () {
    const { count } = this.state

    return (
      <div>
        <h1>Count</h1>
        <p>count: {count}</p>
        <button onClick={this.Click}>Click</button>
      </div>
    )
  }
}

export default Counter
