import styles from './page.module.css'
import LoginClient from './loginclient'

export default function LoginPage() {
    return (
        <div className={styles.main}>
            <LoginClient/>
        </div>
    );
}