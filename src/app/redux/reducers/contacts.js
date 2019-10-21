import actions from '../actions/actions';

const initialState = {
  appContacts: [],
  userContacts: [],
  userMessages: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.APP_CONTACTS: {
      const { data } = action;
      return { ...state, ...data };
    }

    case actions.USER_CONTACTS: {
      const { userContacts } = action;
      return { ...state, userContacts };
    }

    case actions.USER_MESSAGES: {
      const { userMessages } = action;
      return { ...state, userMessages };
    }

    default:
      return state;
  }
};

export default contactsReducer;
