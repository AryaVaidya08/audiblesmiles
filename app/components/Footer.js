import Link from 'next/link';
import { FaEnvelope, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Audible Smiles</h3>
            <p className={styles.description}>
              Providing aid for needy, hearing-impaired individuals through awareness, fundraising, and partnerships.
            </p>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/home">Home</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/our-impact">Our Impact</Link></li>
              <li><Link href="/podcasts">Podcasts</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <div className={styles.contactButtons}>
              <a 
                href="mailto:audiblesmilesnpo@gmail.com" 
                className={styles.contactButton}
                title="Email us"
              >
                <FaEnvelope className={styles.icon} />
              </a>
              
              <a 
                href="https://instagram.com/audiblesmilesnpo" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactButton}
                title="Follow us on Instagram"
              >
                <FaInstagram className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 Audible Smiles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
