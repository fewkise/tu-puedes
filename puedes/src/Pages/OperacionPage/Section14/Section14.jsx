import React from 'react';
import styles from './Section14.module.css';
import { Link } from 'react-router-dom';
import mainImage from '../../../assets/Rectangle 4247 (1).png'
const Section14 = () => {
  return (
    <section className={styles.sectionContainer}>
      <h1 className={styles.mainTitle}>Operación exitosa</h1>

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Bienvenida a la comunidad de Achievers</h2>
          <p className={styles.subtitle}>
            Dile adiós a los extremos, es hora de darle la bienvenida a algo que puede durar muchos años. Algo que viene para quedarse y acompañarte en todas las fases de tu vida.
          </p>

          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <div className={styles.checkIcon}>
                  ✔
              </div> 
              Tu salud es prioridad, vas a sentirte más fuerte.
            </li>
            <li className={styles.infoItem}>
              <div className={styles.checkIcon}>
                   ✔
              </div> 
              El movimiento te hará dormir mejor y estarás más relajada.
            </li>
            <li className={styles.infoItem}>
              <div className={styles.checkIcon}>
                   ✔
              </div> 
              Vas a lograr una vida sana y feliz.
            </li>
          </ul>

          <Link to="/detalle" className={styles.accessButton}>
            Acceder a mi cuenta
          </Link>
        </div>

        <div className={styles.imageContainer}>
            <img src={mainImage}className={styles.imagePlaceholder} />
        </div>
      </div>
    </section>
  );
};

export default Section14;
