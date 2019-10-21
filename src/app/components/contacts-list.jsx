import React from 'react';
import PropTypes from 'prop-types';
import '../styles/contacts.scss';
import { returnFirstName } from '../utils/utils';


const contactsList = ({ contacts }) => {
  const contactList = contacts.map((({ email }) => (
    <div className="contactInfo" key={email}>
      <h4>{returnFirstName(email)}</h4>
      <p>{email}</p>
    </div>
  )));
  return (
    <div className="contactsList">
      {contactList}
    </div>
  );
};

contactsList.propTypes = {
  contacts: PropTypes.instanceOf(Array).isRequired,
};


export default contactsList;
