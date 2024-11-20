import React from 'react'
import styles from "./Menu.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            
            <div className={styles.detail}>
            <h3 classname={styles.postTitle}>Lorem ipsum color sit amet consectetur adispcig</h3>
              <span className={styles.username}>Tony Reynolds</span>
              <span className={styles.date}> - 19.11.24</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            
            <div className={styles.detail}>
            <h3 classname={styles.postTitle}>Lorem ipsum color sit amet consectetur adispcig</h3>
              <span className={styles.username}>Tony Reynolds</span>
              <span className={styles.date}> - 19.11.24</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            
            <div className={styles.detail}>
            <h3 classname={styles.postTitle}>Lorem ipsum color sit amet consectetur adispcig</h3>
              <span className={styles.username}>Tony Reynolds</span>
              <span className={styles.date}> - 19.11.24</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
            
            <div className={styles.detail}>
            <h3 classname={styles.postTitle}>Lorem ipsum color sit amet consectetur adispcig</h3>
              <span className={styles.username}>Tony Reynolds</span>
              <span className={styles.date}> - 19.11.24</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu
