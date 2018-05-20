import React from 'react';
import { Grid, Col, Row, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './App.css';
import { subscribeToMessage } from './__data__/socket'
import { ChatWindow, Contacts, InputMessage } from './components'
import { fetchMessages, fetchContacts, addMessage } from './__data__/actions'

const mapDispatchToProps = (dispatch) => ({ 
  fetchMessages: bindActionCreators (fetchMessages, dispatch),
  fetchContacts: bindActionCreators (fetchContacts, dispatch),
  addMessage: bindActionCreators(addMessage, dispatch)
})

const mapStateToProps = (state) => ({ messages: state.messages, contacts: state.contacts })

class App extends React.Component {
    constructor (props){
        super(props)
        subscribeToMessage((err, message) => this.props.addMessage(message))
    }

    componentDidMount () {
        this.props.fetchMessages()
        this.props.fetchContacts()
    }

    render() {
    
      return (
        <div>
            <Grid>
                <Row>
                    <Navbar inverse collapseOnSelect fixedTop>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">SberCHAT</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} href="#">
                                    About
                                </NavItem>
                                <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">
                                    Login
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
                <Row className="show-grid">
                    <Col md={4}>
                        <Contacts contacts={this.props.contacts} className="Contacts"/>
                    </Col>
                    <Col md={8}>
                        <ChatWindow messages={this.props.messages}/>  
                    </Col>
                </Row>
                <Row>
                    <Col md={4} />
                    <Col md={8}>
                        <InputMessage className="InputMessage"/>
                    </Col>
                </Row>
            </Grid>
        </div>
      );
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);