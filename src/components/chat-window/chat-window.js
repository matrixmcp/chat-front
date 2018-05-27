import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem, Col, Row, Label } from 'react-bootstrap'
import moment from 'moment'
import { FORMATS_DATETIME } from '../../__data__/constatnts'

import style from './chat-window.css'

export const ChatWindow = (props) => (
    <div className={style.container}>
        <Row>
            <Col md={12}>
                <ListGroup>
                    {
                        props.messages.map((item, index)=>{
                            return (
                                <ListGroupItem href="#link" key={index}>
                                    <Row>
                                        <Col>
                                            <Label bsClass={style.userName}>{item.name}</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={9}>{item.text}</Col>
                                        <Col md={3}>
                                            {moment(item.datetime).format(FORMATS_DATETIME.FULL)}
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

ChatWindow.propTypes = {
    messages: PropTypes.array.isRequired,
}
