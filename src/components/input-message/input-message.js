import React from 'react'
import { Button, Col, FormControl, Row } from 'react-bootstrap'

import { sendToMessage } from '../../__data__/socket'
import './input-message'

const user = {
    name: "Ivan"
}

export class InputMessage extends React.Component {

    constructor (props) {
        super(props)
        this.state = { value: '' }

    }
    handleClickButtonSend = () => {
        const text = this.state.value
        const datetime = new Date()
        sendToMessage(user.name, text, datetime)
        this.setState({ value: '' })
    }

    handleChangeInput = (e) => {
        this.setState({ value: e.target.value })
    }

    handlePushKeyEnter = (e) => {
        if(e.keyCode === 13){
            this.handleClickButtonSend()
        }
    }

    render(){
        return (
            <div className={this.props.className}>
                <Row>
                    <Col md={8}>
                        <FormControl
                            type="text"
                            placeholder="Введите сообщение..."
                            onChange={this.handleChangeInput}
                            value={this.state.value}
                            onKeyDown={this.handlePushKeyEnter}
                        />
                    </Col>
                    <Col md={4}>
                        <Button bsStyle="primary" bsSize="sm" onClick={this.handleClickButtonSend}>
                            SEND MESSAGE
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
