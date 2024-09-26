import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Links from './links/Links'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>Agency</Link>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar
