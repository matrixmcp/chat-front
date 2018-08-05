import React from 'react'
import PropTypes from 'prop-types'

import style from './contacts.css'
import logo from '../../images/logo.svg'

export const Contacts = (props) =>(
    <div className={style.container}>
        {
            props.contacts.map((item, index)=>{
                return (
                    <div className={style.item} key={index}>
                        <image className={style.avatar} src={logo} />
                        <span className={style.username}>{item.username}</span>
                    </div>
                )
                
            })
        }
    </div>
)

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
}