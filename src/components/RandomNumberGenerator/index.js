// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  displayRandomNumber = () => {
    this.setState({number: Math.round(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg_container">
        <div className="container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.displayRandomNumber}>
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
