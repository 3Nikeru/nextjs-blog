import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Agency</div>
      <div className={styles.copyright}>Creative thoughts agency <span className='year'>{currentYear}</span> © All rights reserved.</div>
    </div>
  )
}

export default Footer
