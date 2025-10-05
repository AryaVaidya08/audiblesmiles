import styles from './page.module.css';

export default function OurImpact() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Impact</h1>
        <p className={styles.subtitle}>Making a difference in the lives of children with hearing challenges</p>
      </div>
      
      <div className={styles.content}>
        <div className={styles.placeholder}>
          <h2>Impact Stories Coming Soon</h2>
          <p>We're currently gathering stories and data about the positive impact we've made in communities around the world. Check back soon to see how Audible Smiles is changing lives!</p>
        </div>
      </div>
    </div>
  );
}