import actions from '../actions/actions';

const initialState = {
  appContacts: [],
  userContacts: [],
  userMessages: [],
  activeContact: '',
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.APP_CONTACTS: {
      const { appContacts } = action;
      return { ...state, appContacts };
    }

    case actions.USER_CONTACTS: {
      const { userContacts } = action;
      return { ...state, userContacts };
    }

    case actions.USER_MESSAGES: {
      const { userMessages } = action;
      return { ...state, userMessages };
    }

    case actions.ACTIVE_CONTACT: {
      const { activeContact } = action;
      return { ...state, activeContact };
    }

    default:
      return state;
  }
};

export default contactsReducer;
