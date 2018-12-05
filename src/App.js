import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import style from './app.css'

import { subscribeToMessage, subscribeToMessagesHistory } from './__data__/socket'
import { ChatWindow, Contacts, InputMessage, NavBar } from './components'
import { initMessages, fetchContacts, fetchCurrentUser, addMessage } from './__data__/actions'

const mapDispatchToProps = (dispatch) => ({ 
  initMessages: bindActionCreators (initMessages, dispatch),
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
        subscribeToMessagesHistory((err, messages) => this.props.initMessages(messages))
    }

    componentDidMount () {
        this.props.fetchContacts()
        this.props.fetchCurrentUser()
    }

    render() {
        const { currentUser, messages, contacts } = this.props

      return (
        <div className={style.container}>
            <NavBar auth={currentUser.auth}/>
           <div className={style.contentWrapper}>
               <div className={style.contactsWrapper}>
                <Contacts contacts={contacts} />
            </div>
            <div className={style.messagesWrapper}>
                <ChatWindow messages={messages}/>  
                <InputMessage className={style.inputMessage} user={currentUser}/>
            </div>
            </div>
        </div>
      );
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);