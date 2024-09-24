import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>Agency</Link>
    </div>
  )
}

export default Navbar
