import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserContacts from '../components/contacts/user-contacts';
import MessagesComponent from '../components/messages';
import { fetchUserContacts, fetchUserMessages, sendMessage } from '../redux/actions/contacts';
import '../styles/common.scss';
import '../styles/messages.scss';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.messageRef = createRef();
    this.state = { text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.scrollIntoView = this.scrollIntoView.bind(this);
  }

  componentDidMount() {
    const { dispatch, activeContact } = this.props;
    dispatch(fetchUserContacts(activeContact));
  }

  componentDidUpdate() {
    this.scrollIntoView();
  }

  setRef(ref) {
    this.textarea = ref;
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
      dispatch(sendMessage({ receiver: activeContact, message: text }));
      this.textarea.value = '';
      this.setState({ text: '' });
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
          <UserContacts />
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
