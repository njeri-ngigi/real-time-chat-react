import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactsList from '../components/contacts-list';
import MessagesComponent from '../components/messages';
import { fetchUserContacts, fetchUserMessages } from '../redux/actions/contacts';
import '../styles/common.scss';
import '../styles/messages.scss';

class Messages extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUserContacts());
  }

  fetchContactMessages(email) {
    const { dispatch } = this.props;
    dispatch(fetchUserMessages(email));
  }

  render() {
    const {
      userContacts: contacts, userMessages: messages,
    } = this.props;

    return (
      <div className="flex max-size">
        <div className="contactsColumn">
          <ContactsList contacts={contacts} />
        </div>
        <div className="messagesColumn">
          <MessagesComponent messages={messages} />
        </div>
      </div>
    );
  }
}

Messages.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userContacts: PropTypes.instanceOf(Array).isRequired,
  userMessages: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ contacts }) => {
  const { userContacts, userMessages } = contacts;
  return { userContacts, userMessages };
};


export default connect(mapStateToProps)(Messages);
