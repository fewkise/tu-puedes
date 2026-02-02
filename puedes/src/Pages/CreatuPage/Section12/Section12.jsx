import React from 'react';
import styles from './Section12.module.css';
import { Link } from 'react-router-dom';
import mainImage from '../../../assets/407ec605e7908d5fb58bf1e3876100466c480ed0.jpg'
const Section12 = () => {
  return (
    <section className={styles.sectionContainer}>
      <h1 className={styles.title}>Crea tu cuenta</h1>
      <p className={styles.subtitle}>¿Lista para sentirte mejor y disfrutar el proceso?</p>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img src={mainImage} alt="Person doing exercise" className={styles.imagePlaceholder} />
        </div>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Correo</label>
            <input type="email" id="email" placeholder="Type here" className={styles.input} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Contraseña</label>
            <input type="password" id="password" placeholder="Type here" className={styles.input} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>Nombre y apellido</label>
            <input type="text" id="fullName" placeholder="Type here" className={styles.input} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Número de Teléfono</label>
            <input type="tel" id="phone" placeholder="Type here" className={styles.input} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Fecha de nacimiento</label>
            <div className={styles.dateGroup}>
              <select className={styles.select}>
                <option>Día</option>
                <option>Mes</option>
              </select>
              <select className={styles.select}>
                <option>Mes</option>
                <option>Mes</option>
              </select>
              <select className={styles.select}>
                <option>Año</option>
                <option>Mes</option>
              </select>
            </div>
          </div>

            <Link to="/crear" className={styles.submitButton}>
            Crear cuenta
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section12;
