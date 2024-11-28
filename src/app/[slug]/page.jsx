import React from 'react'
import styles from './singlePage.module.css'
import Menu from '../components/Menu/Menu'
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 classname={styles.title}>Lorum ipsum dolor it amet consectectur adipsiscing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
       
        </div>
        <div className={styles.content}>
          <div className={styles.post}></div>
          <Menu/>
        </div>
      
    </div>
  )
}

export default SinglePage
