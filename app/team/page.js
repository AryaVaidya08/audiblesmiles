import styles from './page.module.css';

export default function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Team</h1>
        <p className={styles.subtitle}>Meet the dedicated individuals behind Audible Smiles</p>
      </div>
      
      <div className={styles.content}>
        <div className={styles.placeholder}>
          <h2>Team Members Coming Soon</h2>
          <p>We're currently building our team page. Check back soon to meet the amazing people who make Audible Smiles possible!</p>
        </div>
      </div>
    </div>
  );
}