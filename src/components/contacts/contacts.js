import React from 'react'
import PropTypes from 'prop-types'
import './contacts.css'
import { ListGroup, ListGroupItem, Row, Col, Image } from 'react-bootstrap'
import logo from '../../images/logo.svg'

export const Contacts = (props) =>(
    <div className={props.className}>
        <Row>
            <Col md={12}>
                <ListGroup>
                    {
                        props.contacts.map((item, index)=>{
                            return (
                                <ListGroupItem href="#link" key={index}>
                                    <Row>
                                        <Col md={3}>
                                            <Image src={logo} circle />
                                        </Col>
                                        <Col md={9}>
                                            {item.username}
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            )
                            
                        })
                    }
                </ListGroup>
            </Col>
        </Row>
    </div>
)

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
}