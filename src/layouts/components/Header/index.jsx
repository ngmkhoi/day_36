import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <NavLink to="/">KhoiNguyen DEV</NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className ={({isActive}) => (isActive ? styles.active : '')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className ={({isActive}) => (isActive ? styles.active : '')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/posts"
                            className ={({isActive}) => (isActive ? styles.active : '')}
                        >
                            Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className ={({isActive}) => (isActive ? styles.active : '')}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className ={({isActive}) => (isActive ? styles.active : '')}
                        >
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin"
                            className ={({isActive}) => (isActive ? styles.active : '')}
                        >
                            Admin
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;