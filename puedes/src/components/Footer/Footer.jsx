import React from 'react';
import styles from './Footer.module.css';
import logoSvg from '../../assets/Vector (43).png'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.leftContent}>
        <div className={styles.linksContainer}>
          <div className={styles.linkColumn}>
            <a href="/routines" className={styles.footerLink}>Rutinas</a>
            <a href="/about" className={styles.footerLink}>Sobre nosotros</a>
            <a href="/blog" className={styles.footerLink}>Blog</a>
          </div>
          
          <div className={styles.linkColumn}>
            <a href="/faq" className={styles.footerLink}>FAQ</a>
            <a href="/gettogethers" className={styles.footerLink}>Get Togethers</a>
            <a href="/contact" className={styles.footerLink}>Contacto</a>
          </div>
        </div>

        <div className={styles.contactInfoContainer}>
            <p className={styles.contactInfo}>@achieve_bymm</p>
            <p className={styles.contactInfo}>©Achieve 2022</p>
        </div>
      </div>
      <div className={styles.rightContent}>
        <img src={logoSvg} alt="Achieve Logo" className={styles.logo} />
        
        <div className={styles.buttonsContainer}>
          <button className={`${styles.button} ${styles.subscribeBtn}`}>Suscribirme</button>
          <button className={`${styles.button} ${styles.loginBtn}`}>Log in</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
