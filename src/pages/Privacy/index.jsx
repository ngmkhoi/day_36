import { NavLink } from 'react-router-dom';
import styles from './Privacy.module.scss';

function Privacy() {
    return (
        <div className={styles.privacy}>
            <h2>Privacy Policy</h2>
            <p>
                Your privacy is important to us. This policy explains how we handle your data.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* Lặp lại để tạo nội dung dài */}
            {Array(20)
                .fill()
                .map((_, index) => (
                    <p key={index}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                ))}
            <p>
                Contact us via our <NavLink to="/contact">Contact Page</NavLink> for support.
            </p>
        </div>
    );
}

export default Privacy;