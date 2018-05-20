import * as actionTypes from '../action-types'
import axios from 'axios'

import { API_ROOT } from '../constatnts'

export const initMessages = (messages) => ({ type: actionTypes.INIT_MESSAGES, messages })

export function fetchMessages(){

    return (dispatch) => {
        
        return axios.get(`${API_ROOT}/messages`)
            .then((response) => {
                dispatch(initMessages(response.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export function addMessage (message) {
    return (dispatch) => {
        dispatch({ type: actionTypes.ADD_MESSAGE, message })
    }
}