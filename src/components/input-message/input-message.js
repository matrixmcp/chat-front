import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, FormControl } from 'react-bootstrap'

import { sendToMessage } from '../../__data__/socket'
import style from './input-message.css'

export class InputMessage extends React.Component {
    static propTypes = {
        user: PropTypes.object,
    }

    static defaultProps = {
        user: {},
    }

    constructor (props) {
        super(props)
        this.state = { value: '' }

    }
    
    handleClickButtonSend = () => {
        const { user } = this.props
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
            <div className={style.container}>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Введите сообщение..."
                        onChange={this.handleChangeInput}
                        value={this.state.value}
                        onKeyDown={this.handlePushKeyEnter}
                    />
                    <Button className={style.button} onClick={this.handleClickButtonSend}>
                        SEND MESSAGE
                    </Button>
            </div>
        )
    }
}
