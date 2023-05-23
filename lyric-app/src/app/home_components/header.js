import styles from './header.module.css'
import Link from 'next/link';

export default function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.description}>
                <a href="https://www.youtube.com/watch?v=q_TNJUON2V0" target='_blank'> Lyrical Analysis </a>
                <Link href="/"> Home </Link>
                <a href="https://github.com/sbaliyan16" target='_blank'> Shubh </a>
            </div>
        </div>
        
    )
}