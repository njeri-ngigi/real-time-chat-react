import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import MessageBubble from './message-bubble';
import Aux from '../hoc/aux';

const messagesComponent = forwardRef(({ messages }, ref) => {
  const messageList = messages.map(
    // eslint-disable-next-line no-underscore-dangle
    (message) => <MessageBubble message={message} key={message._id} ref={ref} />,
  );
  return (<Aux>{ messageList }</Aux>);
});

messagesComponent.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
};

export default messagesComponent;
