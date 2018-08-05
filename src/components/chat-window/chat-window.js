import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FORMATS_DATETIME } from '../../__data__/constatnts'

import style from './chat-window.css'

export const ChatWindow = (props) => (
    <div className={style.container}>
        {
            props.messages.map((item, index) => (
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
    </div>
)

ChatWindow.propTypes = {
    messages: PropTypes.array.isRequired,
}
