import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import AuthSidebar from './components/AuthSidebar';
import styles from './AuthLayout.module.scss';
import AuthFooter from "./components/AuthFooter/index.jsx";

function AuthLayout() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <AuthSidebar/>
                <main className={styles.content}>
                    <Outlet />
                </main>
            </div>
            <AuthFooter/>
        </div>
    );
}

export default AuthLayout;