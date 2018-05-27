import * as actionTypes from '../action-types'
import _ from 'lodash'

export default function currentUser (state = {}, action) {
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER:
            return _.assign({}, state, action.user)
        default:
            return state
    }
}