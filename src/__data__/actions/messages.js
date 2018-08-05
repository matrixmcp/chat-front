import * as actionTypes from '../action-types'

export function initMessages (messages) {
    return (dispatch) => {
        dispatch({ type: actionTypes.INIT_MESSAGES, messages })
    }
}

export function addMessage (message) {
    return (dispatch) => {
        dispatch({ type: actionTypes.ADD_MESSAGE, message })
    }
}