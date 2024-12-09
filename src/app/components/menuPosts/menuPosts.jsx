import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './menuPosts.module.css'

const menuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href='/' className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.image} />
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            
            <div className={styles.detail}>
            <h3 className={styles.postTitle}>Lorem ipsum color sit amet consectetur adispcig</h3>
              <span className={styles.username}>Tony Reynolds</span>
              <span className={styles.date}> - 19.11.24</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.image} />
          </div>
            )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            
            <div className={styles.detail}>
            <h3 className={styles.postTitle}>Lorem ipsum color sit amet consectetur adispcig</h3>
              <span className={styles.username}>Tony Reynolds</span>
              <span className={styles.date}> - 19.11.24</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.image} />
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            
            <div className={styles.detail}>
            <h3 className={styles.postTitle}>Lorem ipsum color sit amet consectetur adispcig</h3>
              <span className={styles.username}>Tony Reynolds</span>
              <span className={styles.date}> - 19.11.24</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.image} />
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
            
            <div className={styles.detail}>
            <h3 className={styles.postTitle}>Lorem ipsum color sit amet consectetur adispcig</h3>
              <span className={styles.username}>Tony Reynolds</span>
              <span className={styles.date}> - 19.11.24</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default menuPosts;
