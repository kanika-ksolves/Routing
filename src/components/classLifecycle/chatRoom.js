import React, { Component } from 'react'
import { createConnection } from './chat'

export default class ChatRoom extends Component {
    state = {
        serverUrl : 'https://localhost:1234'
    }

componentDidMount(){
    this.setupConnection();
    console.log("componentDidMount : setupConnection")
}

componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate')
    if(this.props.roomId !== prevProps.roomId ||
        this.state.serverUrl !== prevState.serverUrl){
            this.destroyConnection();
            this.setupConnection();
        }
}

componentWillUnmount(){
    console.log('componentWillUnmount')
    this.destroyConnection();
}

setupConnection(){
    console.log('setupConnection')
    this.connection = createConnection(
        this.state.serverUrl,
        this.props.roomId
    );
    this.connection.connect()
}

destroyConnection(){
    console.log('destroyConnection')
    this.connection.disconect();
    this.connection = null;
}
  render() {
    console.log("render")
    return (
      <div>
        <label>
            Server Url = {' '}
            <input
            value = {this.state.serverUrl}
            onChange={e => {
                this.setState({
                    serverUrl : e.target.value
                });
            }}
            />
            
        </label>
        <h1>Welcome to {this.props.roomId} room!</h1>
      </div>
    )
  }
}
