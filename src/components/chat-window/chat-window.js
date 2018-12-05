import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FORMATS_DATETIME } from '../../__data__/constatnts'

import style from './chat-window.css'

export class ChatWindow extends React.Component {
    static propTypes = {
        messages: PropTypes.array.isRequired,
    }

    componentDidUpdate () {
        this.scrollToBottom()
    }
    componentDidMount() {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        const maxScrollTop =this.el.scrollHeight - this.el.clientHeight
        this.el.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
    }

    render () {
        return (
            <div className={style.container} ref={el => { this.el = el } }>
                {
                    this.props.messages.map((item, index) => (
                            <div className={style.item} key={index}>
                                <span className={style.username}>
                                    {item.userName}
                                </span>
                                <span className={style.text}>
                                    {item.text}
                                </span>
                                <span className={style.date}>
                                    {moment(item.createdDate).format(FORMATS_DATETIME.FULL)}
                                </span>
                            </div>
                        )
                    )
                }
            </div>)
    }
}
