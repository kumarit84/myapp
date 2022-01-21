import React, { Component } from 'react'

class Message extends Component {

    constructor () {
      super()
      this.state = {
        message: 'Welcome visitor state' 
      }
    }
    
    changeMessage () {
       this.setState({
          message:'Thank you for subscriing'
       })
    }

    render() {
        return (
          <div>
          <h1>{this.state.message}</h1>
          <button onClick={() => this.changeMessage()}>Subscribe</button>
          </div>
          )
    }

}

export default Message