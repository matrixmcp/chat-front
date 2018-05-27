import * as actionTypes from '../action-types'
import { API_ROOT } from '../constatnts'
import axios from 'axios'

export const setCurrentUser = (user) => ({ type: actionTypes.SET_CURRENT_USER, user })

export function fetchCurrentUser () {
    return (dispatch) => {
        return axios.get(`${API_ROOT}/user`)
        .then((response) => {
            dispatch(setCurrentUser(response.data))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}