import React from 'react'
import logo from '/src/images/logo.png'
import styles from './navigation.module.css'
const Navigation = () => {
  return (
    <div className={styles.nav_logo}>
        <img src={logo} alt="logo" />
    </div>
  )
}

export default Navigation