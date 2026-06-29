import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-copyright">
                        &copy; {currentYear} 避暑地. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
