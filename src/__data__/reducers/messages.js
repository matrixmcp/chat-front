import _ from 'lodash'
import * as actionTypes from '../action-types'

export default function messages(state = [], action) {
    switch (action.type) {
        case actionTypes.INIT_MESSAGES:
            return _.concat(state, action.messages)
        case actionTypes.ADD_MESSAGE:
            return _.concat(state, [action.message])
        default:
            return state
    }
}