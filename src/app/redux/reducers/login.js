import actions from '../actions/actions';

const initialState = {
  token: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN: {
      const { data } = action;
      return { ...state, ...data };
    }
    default:
      return state;
  }
};

export default loginReducer;
