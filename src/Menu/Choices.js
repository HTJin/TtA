import React, { Component } from 'react'

import './Menu.css'

class Choices extends Component {

  render() {
    return (
      <div className='choices-display'>
        <h1>Through the Ages: A New Story of Civilization</h1>
        <form >
          <fieldset className='options'>
            <legend>How many players?</legend>
            <div className='choices'>
              <div className='two player'>2</div>
              <div className='three player'>3</div>
              <div className='four player'>4</div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Choices