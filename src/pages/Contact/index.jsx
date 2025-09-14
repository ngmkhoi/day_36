import { NavLink } from 'react-router-dom';
import styles from './Contact.module.scss';

function Contact() {
    return (
        <div className={styles.contact}>
            <h2>Contact Us</h2>
            <p>
                We’d love to hear from you! Reach out to us with any questions or feedback.
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
                Visit our <NavLink to="/privacy">Privacy Policy</NavLink> for more information.
            </p>
        </div>
    );
}

export default Contact;