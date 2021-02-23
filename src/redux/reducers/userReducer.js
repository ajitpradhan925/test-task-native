import {USER_DATA, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} from '../constants';

const userDetails = {
    name: 'Ajit Pradhan',
    address: 'Brahmpapur, Dhenkanal, Odisha',
    location: 'Dhenkanal',
    profession: 'Associate Consultant',
    workExperience: '7 months',
  };


  export const userDetailsReducer = (state = userDetails, action) => {
    switch (action.type) {
      case USER_DATA:
        return state;
      default:
        return state;
    }
  };

export const getAllUsers = (state = {allUsers: []}, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {loading: true, allUsers: []};
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        allUsers: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
