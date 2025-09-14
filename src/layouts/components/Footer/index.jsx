import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 My App. All rights reserved.</p>
            {/* Thêm className={styles.nav} */}
            <nav className={styles.nav}>
                <NavLink to='/contact'>Contact</NavLink>
                {/* Bỏ dấu | ngăn cách, CSS sẽ xử lý khoảng cách */}
                <NavLink to='/privacy'>Privacy Policy</NavLink>
            </nav>
        </footer>
    )
}

export default Footer;