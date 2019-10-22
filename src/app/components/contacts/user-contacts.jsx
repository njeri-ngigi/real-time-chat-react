import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactsList from './contacts-list';

const contactsList = ({ userContacts, reset }) => (
  <div className="contactsList">
    <Link to="/contacts" className="contactsButton">
        View all contacts
    </Link>
    <ContactsList contacts={userContacts} reset={reset} />
  </div>
);

contactsList.propTypes = {
  userContacts: PropTypes.instanceOf(Array).isRequired,
  reset: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts: { userContacts } }) => ({ userContacts });

export default connect(mapStateToProps)(contactsList);
