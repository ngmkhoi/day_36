import { Outlet } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminFooter from './components/AdminFooter';
import styles from './AdminLayout.module.scss';

function AdminLayout() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h1>Admin Panel</h1>
            </header>
            <div className={styles.container}>
                <AdminSidebar />
                <main className={styles.content}>
                    <Outlet />
                </main>
            </div>
           <AdminFooter />
        </div>
    );
}

export default AdminLayout;