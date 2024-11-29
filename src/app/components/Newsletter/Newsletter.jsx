import React from 'react'
import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={styles.container}>
        <div className={styles.newsletter}>
            <h1 className={styles.title}>Want to stay up to date?</h1>
            <input textarea className={styles.email}></input>
            <button className={styles.submit}>Submit</button>
        </div>      
    </div>
  )
}

export default Newsletter
