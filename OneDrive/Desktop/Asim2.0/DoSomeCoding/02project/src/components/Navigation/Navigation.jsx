import React from 'react'
import styles from './Navigation.module.css'


export const Navigation = () => {
  return (
    <nav className={`${styles['navigation']} container`}>
        <div className='logo'>
            <img src="../public/images/logo.png" alt="do some logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation;
