import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {

  const status = "authenticated"

  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      {status === "authenticated" ? (
          <div className={styles.write}>
            <textarea placeholder='Comment...' className-={styles.input} />
            <button className={styles.button}>Submit</button>
          </div>
        ) : (
          <Link href='/login'>Login to comment</Link>)}
          <div className={styles.comments}>
            <div className={styles.comment}>
              <div className={styles.user}>
                <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}>01.01.2024</span>
                </div>
              </div>
              <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloremque hic quidem sed fugit aperiam modi laboriosam excepturi nemo quae, praesentium blanditiis sunt repudiandae dolor sint aspernatur rerum pariatur. Animi?</p>
            </div>

            <div className={styles.comment}>
              <div className={styles.user}>
                <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}>01.01.2024</span>
                </div>
              </div>
              <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloremque hic quidem sed fugit aperiam modi laboriosam excepturi nemo quae, praesentium blanditiis sunt repudiandae dolor sint aspernatur rerum pariatur. Animi?</p>
            </div>

            <div className={styles.comment}>
              <div className={styles.user}>
                <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}>01.01.2024</span>
                </div>
              </div>
              <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloremque hic quidem sed fugit aperiam modi laboriosam excepturi nemo quae, praesentium blanditiis sunt repudiandae dolor sint aspernatur rerum pariatur. Animi?</p>
            </div>

            <div className={styles.comment}>
              <div className={styles.user}>
                <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}>01.01.2024</span>
                </div>
              </div>
              <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloremque hic quidem sed fugit aperiam modi laboriosam excepturi nemo quae, praesentium blanditiis sunt repudiandae dolor sint aspernatur rerum pariatur. Animi?</p>
            </div>

            <div className={styles.comment}>
              <div className={styles.user}>
                <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}>01.01.2024</span>
                </div>
              </div>
              <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloremque hic quidem sed fugit aperiam modi laboriosam excepturi nemo quae, praesentium blanditiis sunt repudiandae dolor sint aspernatur rerum pariatur. Animi?</p>
            </div>
          </div>
    </div>
  )
}

export default Comments
