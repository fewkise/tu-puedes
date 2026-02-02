import React from 'react';
import styles from './Section15.module.css';
import img1 from '../../../assets/ec64d5a8679b1243c5520424c50889161b07cc26.jpg'
import img2 from '../../../assets/7f9e44b9fd109eee38fa3702b8600a19893a28fa.jpg'
import img3 from '../../../assets/e1c0190eba991ac6010d403b240c761739cad1a9.jpg'
import img4 from '../../../assets/719eac8e65d603b6386ce2675c51fa33729e805e.jpg'
import img5 from '../../../assets/be37dcad94f826fba0c1017c6e58c3b89bf508a4.jpg'
import img6 from '../../../assets/87075a335ebc02032bd7fd6cf00d3c7f88830e69.jpg'
const categories = [
  'Recetas',
  'Tips',
  'Salud Mental',
  'Productos',
  'Achievers',
  'Fitness',
  'Nutricion',
  'Bienestar',
];

const blogPosts = [
  { id: 1, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl: img1 },
  { id: 2, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl:img2 },
  { id: 3, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl: img3 },
  { id: 4, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl:img4 },
  { id: 5, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl:img5 },
  { id: 6, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl: img1 },
  { id: 7, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl: img2 },
  { id: 8, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl:img3 },
  { id: 9, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl: img4 },
  { id: 10, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl:img5 },
  { id: 11, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl: img1 },
  { id: 12, duration: '2 min', category: 'Categoría', title: 'Titulo', imageUrl: img2},
];

const Section15 = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>Blog</h1>
      </div>

      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <button key={category} className={styles.categoryButton}>
            {category}
          </button>
        ))}
      </div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.cardsGrid}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}>
                  <img src={post.imageUrl} alt="" />
                </div>
                <span className={styles.durationOverlay}>{post.duration}</span>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.categoryLabel}>{post.category}</p>
                <h2 className={styles.cardTitle}>{post.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Section15;
