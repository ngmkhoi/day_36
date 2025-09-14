import { NavLink } from "react-router-dom";
import styles from "./AuthSidebar.module.scss";

// Component giờ đây nhận props, bao gồm cả 'className'
function AuthSidebar({ className }) {
    // Kết hợp class mặc định của sidebar với class được truyền từ bên ngoài (nếu có)
    const sidebarClassName = `${styles.sidebar} ${className || ''}`.trim();

    return (
        <aside className={sidebarClassName}>
            <ul className={styles.navList}>
                <li>
                    <NavLink
                        to="/login"
                        // Thêm class cho NavLink
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Đăng nhập
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Đăng kí
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/forgot-password'
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Quên mật khẩu
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default AuthSidebar;