import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Welcome from '../components/home';
import Message from './messages';
import { login } from '../redux/actions/login';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const {
      token = '', email = '', profilePhotoUrl = '',
    } = JSON.parse(localStorage.getItem('user')) || {};

    dispatch(login({ token, email, profilePhotoUrl }));
  }

  render() {
    const { token } = this.props;
    return (token ? <Message /> : <Welcome />);
  }
}

Home.propTypes = {
  token: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ login: { token } }) => ({
  token,
});

export default connect(mapStateToProps)(Home);
