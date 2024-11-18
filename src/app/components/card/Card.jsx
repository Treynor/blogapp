import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}></div>
            <Image src='/p1.jpeg' alt="" fill/>
            <div className={styles.textContainer}></div>
                <div className={styles.detail}>
                    <span className={styles.date}>18.11.24</span>    
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href='/'>
                    <h1>Lorem isum dolor sit amet consectetur adipsiscing elit.</h1>    
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat suscipit dapibus. Pellentesque fringilla cursus convallis. Integer elementum facilisis maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <Link href='/'>Read More</Link>
        </div>
    )
}

export default Card