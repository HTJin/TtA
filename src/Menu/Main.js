import React, { Component } from 'react'
import Choices from './Choices'

import './Menu.css'

class Main extends Component {
  state = {
    count: 0
  }

  handleChoice = () => {
    this.setState({ })
  }

  render() {
    return (
      <div className='menu-display'>
        <h1>Through the Ages: A New Story of Civilization</h1>
        <Choices players={this.state.count} />
      </div>
    )
  }
}

export default Main