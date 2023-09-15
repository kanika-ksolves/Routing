import React, { Component } from 'react'

export default class classCounter extends Component {
    state = {
        name : '',
        age : 20,    
    }
    nameHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    clickHandler = () => {
        this.setState({
            age : this.state.age + 1
        })
    }

  render() {
    return (
      <>
      <label>
        Name: {' '}
        <input 
        style={{margin:10}}
        value={this.state.name}
        onChange={this.nameHandler}
        />
        <button onClick={this.clickHandler}>Increment age</button>
        <p>Hello {this.state.name}, You are {this.state.age} years old.</p>
        </label>
      </>
    )
  }
}
