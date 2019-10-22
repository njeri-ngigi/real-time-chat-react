import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';
import UserContacts from '../components/contacts/user-contacts';
import MessagesComponent from '../components/messages';
import { fetchUserContacts, fetchUserMessages, sendMessage } from '../redux/actions/contacts';
import '../styles/common.scss';
import '../styles/messages.scss';
import { origin } from '../utils/urls';
import { getUserFromLocalStorage } from '../utils/utils';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.messageRef = createRef();
    this.state = { text: '' };
    this.socket = socketIOClient(origin);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.scrollIntoView = this.scrollIntoView.bind(this);
    this.resetTextArea = this.resetTextArea.bind(this);
  }

  componentDidMount() {
    const { dispatch, activeContact } = this.props;
    dispatch(fetchUserContacts(activeContact));

    this.socket.on('send message', ({ socketId, sender, receiver }) => {
      const { email: localEmail } = getUserFromLocalStorage();
      if ((socketId !== this.socket.id) && (receiver === localEmail)) {
        dispatch(fetchUserContacts(sender));
        dispatch(fetchUserMessages(sender));
      }
    });
  }

  componentDidUpdate() {
    this.scrollIntoView();
  }

  setRef(ref) {
    this.textarea = ref;
  }

  resetTextArea() {
    this.textarea.value = '';
    this.setState({ text: '' });
  }

  fetchContactMessages(email) {
    const { dispatch } = this.props;
    dispatch(fetchUserMessages(email));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch, activeContact } = this.props;
    const { text } = this.state;
    if (text) {
      const { email } = getUserFromLocalStorage();
      dispatch(sendMessage({
        receiver: activeContact, message: text, sender: email,
      }, this.socket));
      this.resetTextArea();
    }
  }

  handleInput(event) {
    this.setState({ text: event.target.value });
  }

  scrollIntoView() {
    if (this.messageRef.current) {
      this.messageRef.current.scrollIntoView({ block: 'end' });
    }
  }

  render() {
    const { userMessages: messages } = this.props;
    return (
      <div className="flex max-size">
        <div className="contactsColumn">
          <UserContacts reset={this.resetTextArea} />
        </div>
        <div className="messagesColumn">
          <div className="messages">
            <MessagesComponent
              ref={this.messageRef}
              messages={messages}
              scroll={this.scrollIntoView}
            />
          </div>
          <form className="textarea" onSubmit={this.handleSubmit}>
            <textarea ref={(ref) => this.setRef(ref)} placeholder="Enter your message" onChange={this.handleInput} />
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    );
  }
}

Messages.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userMessages: PropTypes.instanceOf(Array).isRequired,
  activeContact: PropTypes.string.isRequired,
};

const mapStateToProps = ({ contacts }) => {
  const { userMessages, activeContact } = contacts;
  return { userMessages, activeContact };
};


export default connect(mapStateToProps)(Messages);
