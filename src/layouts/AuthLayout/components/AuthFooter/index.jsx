import styles from './AuthFooter.module.scss';
import { NavLink } from 'react-router-dom';

function AuthFooter() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 My App. All rights reserved.</p>
            {/* Thêm className={styles.nav} */}
            <nav className={styles.nav}>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/privacy'>Privacy Policy</NavLink>
            </nav>
        </footer>
    )
}

export default AuthFooter;