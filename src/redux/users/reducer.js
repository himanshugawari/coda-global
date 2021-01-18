import { FETCH_REQUEST, SELECT_USER } from './actionTypes';

const initialState = {
  users: [],
  slectedUsers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        users: action.payload,
      };
    case SELECT_USER:
      // let temp=state.slectedUsers.map()
      return {
        ...state,
        slectedUsers: [...state.slectedUsers, action.payload],
      };
    default:
      return state;
  }
};

export { reducer };
