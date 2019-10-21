import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { returnFirstName } from '../../utils/utils';
import Aux from '../../hoc/aux';
import '../../styles/contacts.scss';
import { setActiveContact } from '../../redux/actions/contacts';

class contactsComponent extends Component {
  handleClick(email) {
    const { history, dispatch } = this.props;
    dispatch(setActiveContact(email));
    history.push('/');
  }


  render() {
    const { contacts } = this.props;
    const contactsList = contacts.map((({ email }) => (
      <div
        role="link"
        tabIndex="0"
        className="contactInfo"
        key={email}
        onClick={() => this.handleClick(email)}
        onKeyDown={this.handleClick}
      >
        <h4>{returnFirstName(email)}</h4>
        <p>{email}</p>
      </div>
    )));
    return (
      <Aux>{contactsList}</Aux>
    );
  }
}

contactsComponent.propTypes = {
  contacts: PropTypes.instanceOf(Array).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(withRouter(contactsComponent));
