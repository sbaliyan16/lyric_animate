import styles from './page.module.css'
import SignUpClient from './signupclient'

export default function SignUpPage() {
    return (
        <div className={styles.main}>
            <SignUpClient/>
        </div>
    );
}