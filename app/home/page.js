import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Audible Smiles</h1>
        <p className={styles.subtitle}>Building Community Through Hearing</p>
        <p className={styles.description}>
          Audible Smiles is a nonprofit organization dedicated to raising awareness for children with hearing aids 
          and providing financial support for those who cannot afford them. We believe that access to hearing 
          assistance creates opportunities for connection, communication, and community engagement across the globe.
        </p>
      </div>
      
      <div className={styles.mission}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.missionText}>
          We do NOT create hearing aids or develop new technology. Instead, we focus on raising awareness 
          and funds to support children who need hearing aids. Through community partnerships, fundraising 
          events, educational podcasts, and global outreach, we work to ensure that no child is left behind 
          due to hearing challenges.
        </p>
      </div>

      <div className={styles.activities}>
        <h2 className={styles.sectionTitle}>What We Do</h2>
        <div className={styles.activityGrid}>
          <div className={styles.activityCard}>
            <h3>Community Partnerships</h3>
            <p>We collaborate with local organizations to spread awareness and build support networks.</p>
          </div>
          <div className={styles.activityCard}>
            <h3>Fundraising Events</h3>
            <p>We host events to raise money for hearing aids for children in need.</p>
          </div>
          <div className={styles.activityCard}>
            <h3>Educational Podcasts</h3>
            <p>We share stories and experiences from people who have faced hearing loss challenges.</p>
          </div>
          <div className={styles.activityCard}>
            <h3>Global Outreach</h3>
            <p>We work to spread our message and support to communities worldwide.</p>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <h2 className={styles.sectionTitle}>Join Our Mission</h2>
        <p className={styles.ctaText}>
          Together, we can make a difference in the lives of children who need hearing aids. 
          Your support helps us raise awareness and provide essential hearing assistance to those who need it most.
        </p>
        <button className={styles.ctaButton}>Get Involved</button>
      </div>
    </div>
  );
}
