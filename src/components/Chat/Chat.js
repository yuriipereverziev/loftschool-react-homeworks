import React, {Component} from 'react';
import Message from "../Message";
import './Chat.css';

export default class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
    };

    changeInputMessage = event => {
        const inputValue = event.target.value
        this.setState({messageInput: inputValue})
    }

    sendMessageOnEnter = event => {
        if (event.key === 'Enter') {
            this.setState(state =>  ({
                messages: [...state.messages, {text: state.messageInput}],
                messageInput: ''
            }))
        }
    }

    render() {
        console.log(this.state.messages)
        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">

                        {this.state.messages.map((element, id) => {
                            return <Message text={element.text} key={id} />;
                        })}
                    </div>
                </div>
                <input className="input-message"
                       onChange={this.changeInputMessage}
                       onKeyDown={this.sendMessageOnEnter}
                       value={this.state.messageInput}
                />

            </div>
        );
    }
}