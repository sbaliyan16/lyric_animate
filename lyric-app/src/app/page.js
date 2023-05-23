import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>

      <div>
        <Image
          className={styles.logo}
          src="/yeat_truck.png"
          width={280}
          height={280}
          priority
        />
      </div>

      <div className={styles.userLogin}>
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign Up</Link>
      </div>

    </main>
    
  )
}
