import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserContacts from '../components/contacts/user-contacts';
import MessagesComponent from '../components/messages';
import { fetchUserContacts, fetchUserMessages } from '../redux/actions/contacts';
import '../styles/common.scss';
import '../styles/messages.scss';

class Messages extends Component {
  componentDidMount() {
    const { dispatch, activeContact } = this.props;
    dispatch(fetchUserContacts(activeContact));
  }

  fetchContactMessages(email) {
    const { dispatch } = this.props;
    dispatch(fetchUserMessages(email));
  }

  render() {
    const { userMessages: messages } = this.props;

    return (
      <div className="flex max-size">
        <div className="contactsColumn">
          <UserContacts />
        </div>
        <div className="messagesColumn">
          <MessagesComponent messages={messages} />
          <div className="textarea">
            <textarea placeholder="Enter your message" />
            <button type="button">send</button>
          </div>
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
