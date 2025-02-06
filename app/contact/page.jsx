"use client"
import React from 'react'
import { useRef } from 'react'
import styles from './contact.module.css'
import Image from 'next/image'


const СontactPage = () => {
  const formRef = useRef(null);
  const tnxRef = useRef(null);
  const thankYou = (e)=>{
    e.preventDefault();
    formRef.current.style.display='none';
    tnxRef.current.style.display='block';
  }
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src='/contact.png'
          alt='contact'
          fill
          sizes='100vw'
        />
      </div>
      <div className={styles.formContainer}>
        <form ref={formRef} onSubmit={thankYou}>
          <input 
            type='text' 
            placeholder='Name'
            className={styles.inputs}
            required
          />
          <input 
            type='email' 
            placeholder='E-mail'
            className={styles.inputs}
            required
          />
          <input 
            type='number' 
            placeholder='Phone Number (Optional)'
            className={styles.inputs}
            pattern='[0-9]{11}'
            title='Please enter a valid phone number (9 to 11 digits)'
            required
          />
          <textarea 
          name='' 
          id=''
          cols='30'
          rows='10'
          className={styles.inputs}
          placeholder='Message'
          ></textarea>
          <button className={styles.submit}>Submit</button>
        </form>
        <div className={styles.tnx} ref={tnxRef}>
            <h2>Thank you, for submiting the form! We will contact you as soon as posible.</h2>
        </div>
      </div>
    </div>
  )
}

export default СontactPage
