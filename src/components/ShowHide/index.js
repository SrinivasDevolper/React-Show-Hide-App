import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isTrue: true}
  state = {isFalse: true}

  firstBtn = () => {
    this.setState(prevState => {
      if (prevState.isTrue === true) {
        return {isTrue: false}
      } else {
        return {isTrue: true}
      }
    })
  }

  secondBtn = () => {
    this.setState(prevState => {
      if (prevState.isFalse === true) {
        return {isFalse: false}
      } else {
        return {isFalse: true}
      }
    })
  }

  render() {
    const {isTrue} = this.state
    const {isFalse} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="button-cont">
          <button onClick={this.firstBtn}>Show/Hide Firstname</button>
          <button onClick={this.secondBtn}>Show/Hide Lastname</button>
        </div>
        <div>
          <div>
            <div className="first-card">
              {isTrue ? (
                <div>
                  <p>Joe</p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="second-card">
            {!isFalse ? (
              <div>
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
