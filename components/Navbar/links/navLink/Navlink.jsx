import Link from 'next/link'
import React from 'react'
import styles from './navlink.module.css';

const Navlink = ({link}) => {
    
  return (
    <Link 
    href={link.path} 
    className={styles.container}
    >
      {link.title}
    </Link>
  )
}

export default Navlink
