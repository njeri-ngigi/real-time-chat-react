import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { getUserFromLocalStorage, returnFirstName } from '../utils/utils';

const { email } = getUserFromLocalStorage();

const messageBubble = forwardRef(({ message: { message, sender } }, ref) => {
  const sent = email === sender;
  const setMargin = sent ? 'set-margin' : '';
  const firstName = sent ? 'You' : returnFirstName(sender);
  return (
    <div className={setMargin} ref={ref}>
      <div className="message-bubble">{message}</div>
      <p className="float-right">{firstName}</p>
    </div>
  );
});

messageBubble.propTypes = {
  message: PropTypes.instanceOf(Object).isRequired,
};

export default messageBubble;
