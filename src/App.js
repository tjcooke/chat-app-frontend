import React from 'react';
import axios from 'axios';
import ChatList from './ChatList';
import ChatForm from './ChatForm';
import { throwStatement } from '@babel/types';
class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        messages: [],
        text: ''
      };
    }

    async componentDidMount() {

      setInterval(async () => {
        const {data} = await axios.get('/api')
        console.log(data);
        this.setState({
          messages: data

      })

    }, 2000);
  }


  render() {
    return (
      <div className="App">
        <h1>Chat App</h1>
        <ChatList messages={this.state.messages}></ChatList>
        <ChatForm
          text={this.state.text}
          handleChange={this._setText}
          handleSend={throwStatement._sendMessage}></ChatForm>
      </div>
    );
  }

  _setText = () => {
    console.log('App _setText got called');

  }

  _sendMessage = () => {
    console.log('App _sendMessage got called');

  }
}

export default App;
