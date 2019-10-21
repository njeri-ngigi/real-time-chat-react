import axios from 'axios';
import actions from './actions';
import urls from '../../utils/urls';
import { getUserFromLocalStorage } from '../../utils/utils';

export const setAppContacts = (appContacts) => ({
  type: actions.APP_CONTACTS,
  appContacts,
});

export const setUserContacts = (userContacts) => ({
  type: actions.USER_CONTACTS,
  userContacts,
});

export const setUserMessages = (userMessages) => ({
  type: actions.USER_MESSAGES,
  userMessages,
});

export const setActiveContact = (activeContact) => ({
  type: actions.ACTIVE_CONTACT,
  activeContact,
});

export const fetchAppContacts = () => (dispatch) => {
  const { token } = getUserFromLocalStorage();
  axios.get(urls.fetchAppContacts, { headers: { token } })
    .then(({ data: { data } }) => {
      dispatch(setAppContacts(data));
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
};

export const fetchUserMessages = (receiver) => (disptach) => {
  const { token } = getUserFromLocalStorage();
  axios.post(urls.fetchUserMessages, { receiver },
    {
      headers: {
        token,
        'Content-Type': 'application/json',
      },
    })
    .then(({ data: { data } }) => {
      disptach(setUserMessages(data));
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
};

export const fetchUserContacts = (contact) => (dispatch) => {
  const { token } = getUserFromLocalStorage();
  axios.get(urls.fetchUserContacts, { headers: { token } })
    .then(({ data: { data } }) => {
      const email = contact || data[0].email;
      dispatch(setUserContacts(data));
      if (email) dispatch(fetchUserMessages(email));
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
};
