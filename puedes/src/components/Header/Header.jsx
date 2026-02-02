import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/Group 2 (15).png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Membresias', href: '/memberships' },
    { name: 'Rutinas', href: '/routinas' },
    { name: 'Sobre nosotros', href: '/sobre' },
    { name: 'Get Togethers', href: '/gettogethers' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className={styles.header}>
      <Link to='/' style={{textDecoration:'none'}}> <div className={styles.logo}> <img src={logo} alt="" /> <p>Achieve</p></div></Link>

      <nav className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        {navItems.map((item) => (
          <Link key={item.name} to={item.href}>{item.name}</Link>
        ))}
      </nav>

      <div className={styles.authButtons}>
        <button className={styles.subscribeBtn}>Suscribirme</button>
        <button className={styles.loginBtn}>Log in</button>
      </div>
      
      <div className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
};

export default Header;