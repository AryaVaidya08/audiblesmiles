'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/home" className={styles.logo}>
          <Image 
            src="/Transparent_Logo.png" 
            alt="Audible Smiles Logo" 
            width={40} 
            height={40}
            className={styles.logoImage}
          />
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
