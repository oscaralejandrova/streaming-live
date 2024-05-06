import React from 'react';
import facebookLogo from '../../../assets/social/facebook-white.svg';
import instagramLogo from '../../../assets/social/instagram-white.svg';
import twitterLogo from '../../../assets/social/twitter-white.svg';
import appStoreLogo from '../../../assets/store/app-store.svg';
import playStoreLogo from '../../../assets/store/play-store.svg';
import windowsStoreLogo from '../../../assets/store/windows-store.svg';
import './footerPage.css';

const FooterPage = () => {
    return (
        <div className="footer-container">
            <header className="footer-header">
                <p className="footer-links">Home | Tema and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>
                <p className="footer-copyright">Derechos de autor © 2024 Tu Empresa. Todos los derechos reservados.</p>
            </header>
            <section className="footer-social">
                <img src={facebookLogo} alt="Logo de Facebook" className="footer-social-icon" />
                <img src={instagramLogo} alt="Logo de Instagram" className="footer-social-icon" />
                <img src={twitterLogo} alt="Logo de Twitter" className="footer-social-icon" />
            </section>
            <footer className="footer-stores">
                <img src={appStoreLogo} alt="Logo de App Store" className="footer-store-icon" />
                <img src={playStoreLogo} alt="Logo de Play Store" className="footer-store-icon" />
                <img src={windowsStoreLogo} alt="Logo de Windows Store" className="footer-store-icon" />
            </footer>
        </div>
    );
}

export default FooterPage;

