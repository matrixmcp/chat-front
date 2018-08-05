import React from 'react'

import style from './nav-bar.css'

export const NavBar = (props) => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Chat</h1>
            <button className={style.loginButton}>
                {!props.auth ? 'Войти' : 'Выйти'}
            </button>
        </div>
    )
}