import React from 'react';
import PropTypes from 'prop-types';
import MessageBubble from './message-bubble';

const messagesComponent = ({ messages }) => {
  const messageList = messages.map(
    // eslint-disable-next-line no-underscore-dangle
    (message) => <MessageBubble message={message} key={message._id} />,
  );
  return (
    <div className="messages">
      { messageList }
    </div>
  );
};

messagesComponent.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
};

export default messagesComponent;
