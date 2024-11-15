import React from 'react'
import styles from "./Featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, Treyno here!</b> Discover my stories and creative ideas</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill/>
        </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non malesuada ipsum.</h1>
        <p className={styles.postDesc}>Duis venenatis nisi velit, sit amet ullamcorper neque pretium vitae. Etiam aliquam magna bibendum augue tempus tristique sed eu massa. Etiam condimentum malesuada augue, eget vestibulum odio cursus non. Quisque non leo vulputate, ornare ipsum vel, maximus ex. In facilisis iaculis dignissim. Vivamus mollis magna vitae sem aliquet rutrum. </p>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
    </div>

  )
}

export default Featured
