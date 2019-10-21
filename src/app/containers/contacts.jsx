import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactsList from '../components/contacts/contacts-list';
import { fetchAppContacts } from '../redux/actions/contacts';
import '../styles/contacts.scss';


class Contatcs extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAppContacts());
  }

  render() {
    const { appContacts } = this.props;
    return (
      <div className="contacts">
        <ContactsList contacts={appContacts} />
      </div>
    );
  }
}

Contatcs.propTypes = {
  dispatch: PropTypes.func.isRequired,
  appContacts: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ contacts: { appContacts } }) => ({ appContacts });

export default connect(mapStateToProps)(Contatcs);
