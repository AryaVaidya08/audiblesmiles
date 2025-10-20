import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Building Community Through Hearing</h1>
      </div>
      
      <div className={styles.mission}>
        <h2 className={styles.sectionTitle}>Our Mission & What We Do</h2>
        <p className={styles.missionText}>
        We raise awareness and funds to support individuals with hearing loss, ensuring that no one is left behind due to hearing challenges. Through community partnerships, fundraising events, sponsorships, and educational podcasts, we bring people together to make hearing care more accessible. The funds we raise go directly toward purchasing hearing aids at discounted rates and providing thoughtful gift baskets to those in need.
        </p>
        
        <div className={styles.activityGrid}>
          <div className={styles.activityCard}>
            <h3>Fundraising Events</h3>
            <p>Bridgewater CPK, Chipotle, and Panera fundraisers, bake sales, food truck events, walkathons, talent shows, and GoFundMe campaigns.</p>
          </div>
          <div className={styles.activityCard}>
            <h3>Community Activities</h3>
            <p>Music-related events at community homes, movie nights, sign language classes, game nights, and volunteer opportunities.</p>
          </div>
          <div className={styles.activityCard}>
            <h3>Partnerships & Sponsorships</h3>
            <p>Collaborating with Hearing Loss Association of America, Hearing Charities of America, World Wide Hearing, and Hearing Health Foundation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
