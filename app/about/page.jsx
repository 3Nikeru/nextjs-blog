import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'


const aboutPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.subtitle}>About Agency</div>
          <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
          <p className={styles.desc}>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We’re world’s Our Special Team best consulting & finance solution provider. Wide range of web and software development services.</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <span>10 K+</span>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <span>10 K+</span>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <span>10 K+</span>
              <p>Year of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
            <Image
              src='/about.png'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              alt='about'
            />
        </div>
    </div>
  )
}

export default aboutPage
