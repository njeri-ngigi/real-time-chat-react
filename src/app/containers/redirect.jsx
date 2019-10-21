import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import '../styles/common.scss';
import { loginRedirect } from '../redux/actions/login';

class Redirect extends Component {
  componentDidMount() {
    const { location: { search }, dispatch } = this.props;
    const { code } = queryString.parse(search);
    dispatch(loginRedirect(code));
  }

  render() {
    return (
      <div className="max-size flex flex-center">
        <h1 className="font-size">Welcome</h1>
      </div>
    );
  }
}

Redirect.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect()(Redirect);
