import {combineReducers} from 'redux';

const app = (state={}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: 'yuheng',
      };
    default:
      return state;
  }
};

export default combineReducers({
  app,
});
