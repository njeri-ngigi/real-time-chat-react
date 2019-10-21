import axios from 'axios';
import actions from './actions';
import history from '../../utils/history';
import urls from '../../utils/urls';

export const login = (data) => ({
  type: actions.LOGIN,
  data,
});

export const loginFromGoogle = () => {
  axios.post(urls.login)
    .then(({ data }) => {
      const { message } = data;
      window.location.href = message;
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
};

export const loginRedirect = (code) => (dispatch) => {
  axios.get(`${urls.loginRedirect}?code=${code}`)
    .then(({ data }) => {
      const { email, token, profilePhotoUrl } = data.data;
      dispatch(login({ token, email, profilePhotoUrl }));
      const user = JSON.stringify({ email, token, profilePhotoUrl });
      localStorage.setItem('user', user);
      history.push('/');
    })
  // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
};
