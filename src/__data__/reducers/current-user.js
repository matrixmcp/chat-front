import * as actionTypes from '../action-types'

export default function currentUser (state = {}, action) {
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER:
            return action.user
        default:
            return state
    }
}