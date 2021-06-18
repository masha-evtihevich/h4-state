import React from 'react';

class App extends React.Component {

  state = {
    count: 1,
    zeroIndicator: 'not zero'
  }

  onButtonClick = (x) => {
    this.setState({ count: this.state.count + x })
  }
  onReset = () => {
    this.setState({ count: 0, zeroIndicator: 'zero' })
  }
  // верстка
  render() {
    return (
      <div>
        <button onClick={() => this.onButtonClick(-1)}> - </button>
        {this.state.count}
        <button onClick={() => this.onButtonClick(1)}> + </button>
        {this.state.zeroIndicator}
        <button  onClick={this.onReset}>reset</button>
      </div>
    )
  }
}

export default App;