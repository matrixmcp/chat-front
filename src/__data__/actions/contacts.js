import * as actionTypes from '../action-types'
import axios from 'axios'

import { API_ROOT } from '../constatnts'

export const initContacts = (contacts) => ({ type: actionTypes.INIT_CONTACTS, contacts })

export function fetchContacts (){

    return (dispatch) => {

        return axios.get(`${API_ROOT}/contacts`)
            .then((response) => {
                dispatch(initContacts(response.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}