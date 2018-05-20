import _ from 'lodash'
import * as actionTypes from '../action-types'

export default function status (state = {}, action) {
    switch (action.type) {
        case actionTypes.SET_STATUS:
            return _.set(state, action.id, action.status)
        default:
            return state
    }
}