import _ from 'lodash'
import * as actionTypes from '../action-types'

export default function contacts(state = [], action) {
    switch (action.type) {
        case actionTypes.INIT_CONTACTS:
            return _.concat(state, action.contacts)
        default:
            return state
    }
}