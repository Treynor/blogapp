import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>18.11.24 - </span>    
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href='/'>
                    <h1>Lorem isum dolor sit amet consectetur adipsiscing elit.</h1>    
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat suscipit dapibus. Pellentesque fringilla cursus convallis. Integer elementum facilisis maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <Link href='/' className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card