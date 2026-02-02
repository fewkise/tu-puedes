import React, { useState, useRef, useEffect } from 'react';
import styles from './Section13.module.css';
import checkmarkImage from '../../../assets/Frame 69.png';
import arrowImage from '../../../assets/Vector (44).png';
import { Link } from 'react-router-dom'
const CustomSelect = ({ options, placeholder }) => {
  const [selected, setSelected] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.customSelectWrapper} ref={selectRef}>
      <div className={styles.selectHeader} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.selectText}>{selected}</span>
        <div className={styles.arrowWrapper}>
            <img src={arrowImage} alt="dropdown arrow" className={`${styles.arrowIcon} ${isOpen ? styles.open : ''}`} />
        </div>
      </div>
      
      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option) => (
            <li key={option} className={styles.optionItem} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Section13 = () => {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => String(currentYear + i));

  return (
    <section className={styles.sectionContainer}>
      <h1 className={styles.title}>Crea tu cuenta</h1>

      <div className={styles.contentContainer}>
        <div className={styles.infoBlock}>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <div className={styles.checkIcon}>
                  <img src={checkmarkImage} alt="checkmark" />
              </div> 
              Cancela sin compromisos.
            </li>
            <li className={styles.infoItem}>
              <div className={styles.checkIcon}>
                  <img src={checkmarkImage} alt="checkmark" />
              </div> 
              Misma cuota cada mes.
            </li>
            <li className={styles.infoItem}>
              <div className={styles.checkIcon}>
                  <img src={checkmarkImage} alt="checkmark" />
              </div> 
              Pago recurrente
            </li>
          </ul>
        </div>

        <div className={styles.formContainer}>
          <p className={styles.formTitle}>Selecciona tu método de pago</p>

          <div className={styles.formGroup}>
            <label htmlFor="cardNumber" className={styles.label}>Número de tarjeta</label>
            <input type="text" id="cardNumber" placeholder="Type here" className={styles.input} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cardHolder" className={styles.label}>Titular</label>
            <input type="text" id="cardHolder" placeholder="Type here" className={styles.input} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Fecha de caducidad</label>
            <div className={styles.dateGroup}>
              <CustomSelect options={months} placeholder="Mes" />
              <CustomSelect options={years} placeholder="Año" />
            </div>
          </div>

          <Link to="/operation" className={styles.submitButton}>
            Realizar Operación
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section13;
