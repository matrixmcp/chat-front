import { combineReducers } from 'redux'
import messages from './messages'
import contacts from './contacts'
import status from './status'
import currentUser from './current-user'

export default combineReducers({
  messages,
  contacts,
  status,
  currentUser,
})