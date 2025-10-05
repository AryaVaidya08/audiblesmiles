import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Audible Smiles</h3>
            <p className={styles.description}>
              Building community through hearing. Raising awareness and funds for children who need hearing aids.
            </p>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li><a href="/home">Home</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/our-impact">Our Impact</a></li>
              <li><a href="/podcasts">Podcasts</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <p className={styles.contactInfo}>
              Get in touch with us to learn more about our mission and how you can help.
            </p>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 Audible Smiles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
