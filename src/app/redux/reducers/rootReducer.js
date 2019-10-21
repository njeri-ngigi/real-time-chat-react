import { combineReducers } from 'redux';
import loginReducer from './login';
import contactsReducer from './contacts';

export default combineReducers({
  login: loginReducer,
  contacts: contactsReducer,
});
