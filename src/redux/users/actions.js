import { FETCH_REQUEST, SELECT_USER } from './actionTypes';

const fetchRequest = (users) => {
  return {
    type: FETCH_REQUEST,
    payload: users,
  };
};

const selectUser = (user) => {
  return {
    type: SELECT_USER,
    payload: user,
  };
};

// const fetchUsersData =()=>{
//   return (dispatch)=>{
//     fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json')
//     .then(response=>response.json())
//     .then(users=>dispatch(fetchRequest(users)))
//   }
// }

const actions = {
  fetchUsersData: () => {
    return (dispatch) => {
      fetch(
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json'
      )
        .then((response) => response.json())
        .then((users) => dispatch(fetchRequest(users)));
    };
  },
  selectUser: (user) => {
    return (dispatch) => {
      dispatch(selectUser(user));
    };
  },
};

export { actions };
