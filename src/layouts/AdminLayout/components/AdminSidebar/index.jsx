// index.jsx (đã cập nhật)
import { NavLink } from 'react-router-dom';
import styles from './AdminSidebar.module.scss';
// Import các icon bạn muốn dùng
import { RxDashboard } from 'react-icons/rx';
import { FiUsers, FiSettings } from 'react-icons/fi';

function AdminSidebar({ className }) {
    // Kết hợp class để có thể style từ layout cha
    const sidebarClassName = `${styles.sidebar} ${className || ''}`.trim();

    // Hàm tiện ích để dễ dàng quản lý class
    const getNavLinkClass = ({ isActive }) =>
        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

    return (
        <aside className={sidebarClassName}>
            <ul className={styles.navList}>
                <li>
                    <NavLink to="/admin" end className={getNavLinkClass}>
                        <RxDashboard size={20} /> {/* Icon */}
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/users" className={getNavLinkClass}>
                        <FiUsers size={20} /> {/* Icon */}
                        <span>Quản lý Users</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/settings" className={getNavLinkClass}>
                        <FiSettings size={20} /> {/* Icon */}
                        <span>Cài đặt</span>
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default AdminSidebar;