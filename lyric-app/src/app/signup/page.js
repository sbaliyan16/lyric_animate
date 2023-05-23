import styles from './page.module.css'
import SignUp from './signup'

export default function SignUpPage() {
    return (
        <div className={styles.main}>
            <SignUp/>
        </div>
    );
}