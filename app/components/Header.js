import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/home" className={styles.logo}>
          Audible Smiles
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/home" className={styles.navLink}>
            Home
          </Link>
          <Link href="/team" className={styles.navLink}>
            Team
          </Link>
          <Link href="/our-impact" className={styles.navLink}>
            Our Impact
          </Link>
          <Link href="/podcasts" className={styles.navLink}>
            Podcasts
          </Link>
          <Link href="/faq" className={styles.navLink}>
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
}
