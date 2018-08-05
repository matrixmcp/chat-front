import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import style from './app.css'

import { subscribeToMessage } from './__data__/socket'
import { ChatWindow, Contacts, InputMessage, NavBar } from './components'
import { fetchMessages, fetchContacts, fetchCurrentUser, addMessage } from './__data__/actions'

const mapDispatchToProps = (dispatch) => ({ 
  fetchMessages: bindActionCreators (fetchMessages, dispatch),
  fetchContacts: bindActionCreators (fetchContacts, dispatch),
  fetchCurrentUser: bindActionCreators (fetchCurrentUser, dispatch),
  addMessage: bindActionCreators(addMessage, dispatch)
})

const mapStateToProps = (state) => ({ 
    messages: state.messages,
    contacts: state.contacts,
    currentUser: state.currentUser
})

class App extends React.Component {
    constructor (props){
        super(props)
        subscribeToMessage((err, message) => this.props.addMessage(message))
    }

    componentDidMount () {
        this.props.fetchMessages()
        this.props.fetchContacts()
        this.props.fetchCurrentUser()
    }

    render() {
        const { currentUser, messages, contacts } = this.props

      return (
        <div className={style.container}>
            <NavBar auth={currentUser.auth}/>
            <div className={style.contactsWrapper}>
                <Contacts contacts={contacts} />
            </div>
            <div className={style.messagesWrapper}>
                <ChatWindow messages={messages}/>  
                <InputMessage className={style.inputMessage} user={currentUser}/>
            </div>
        </div>
      );
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);