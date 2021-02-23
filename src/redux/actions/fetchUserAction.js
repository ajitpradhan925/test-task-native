import {USER_DATA, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} from '../constants';
import axios from 'axios';
export const listUsers = (page) => async (dispatch) => {
    try {
        dispatch({ type: FETCH_USERS_REQUEST, loading: true })

        const { data } = await axios.get(
            `https://dummyapi.io/data/api/user?page=${page}&limit=10`,
            {
              headers: {'app-id': '6034cd7bddcea0675112c528'},
            },
          )

        //   console.log(data)


        console.log("data", data.data)
        dispatch({ type: FETCH_USERS_SUCCESS, payload: data.data })

    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_USERS_ERROR,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message

        })
    }
};