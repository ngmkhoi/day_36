import styles from './AdminFooter.module.scss';
import { NavLink } from 'react-router-dom';

function AdminFooter() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 My App. All rights reserved.</p>
            <nav>
                <NavLink to='/contact'>Contact</NavLink> | {' '}
                <NavLink to='/privacy'>Privacy</NavLink>
            </nav>
        </footer>
    )
}

export default AdminFooter;