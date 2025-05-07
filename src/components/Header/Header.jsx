/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Header.module.css'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const Header = () => {
  return (
    <header className={styles.header}>
        <HamburgerMenu />
    </header>
  )
}

export default Header