import styles from './page.module.css';

export default function FAQ() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>Common questions about Audible Smiles and our mission</p>
      </div>
      
      <div className={styles.content}>
        <div className={styles.placeholder}>
          <h2>FAQ Section Coming Soon</h2>
          <p>We're currently compiling frequently asked questions about our organization, mission, and how you can get involved. Check back soon for answers to common questions!</p>
        </div>
      </div>
    </div>
  );
}