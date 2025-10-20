import styles from './page.module.css';

export const metadata = {
  title: "Our Impact",
  description: "Discover how AudibleSmiles makes a difference through fundraising activities, community engagement, partnerships with national organizations, and direct support for hearing aid accessibility.",
  keywords: [
    "audible smiles impact",
    "hearing aid fundraising",
    "community engagement",
    "hearing loss support",
    "nonprofit partnerships",
    "hearing charities",
    "fundraising events",
    "hearing health awareness"
  ],
  openGraph: {
    title: "Our Impact | AudibleSmiles",
    description: "Discover how AudibleSmiles makes a difference through fundraising activities, community engagement, partnerships with national organizations, and direct support for hearing aid accessibility.",
    images: [
      {
        url: '/Transparent_Logo.png',
        width: 1200,
        height: 630,
        alt: 'AudibleSmiles Impact',
      },
    ],
  },
  twitter: {
    title: "Our Impact | AudibleSmiles",
    description: "Discover how AudibleSmiles makes a difference through fundraising activities, community engagement, partnerships with national organizations, and direct support for hearing aid accessibility.",
  },
};

export default function OurImpact() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>How We Help</h1>
      </div>
      
      <div className={styles.content}>
        <div className={styles.impactSections}>
          <div className={`${styles.impactSection} ${styles.impactSectionWhite}`}>
            <div className={styles.sectionContent}>
              <h2 className={styles.sectionTitle}>Our Fundraising Activities</h2>
              <div className={styles.activityGrid}>
                <div className={styles.activityCard}>
                  <h3>Restaurant Fundraisers</h3>
                  <p>Bridgewater CPK, Chipotle, and Panera fundraisers to raise money for hearing aids and support our mission.</p>
                </div>
                <div className={styles.activityCard}>
                  <h3>Community Events</h3>
                  <p>Bake sales, food truck events, walkathons, talent shows, and GoFundMe campaigns to engage the community.</p>
                </div>
                <div className={styles.activityCard}>
                  <h3>Sports & Games</h3>
                  <p>Sports events and game nights that generate funds while bringing people together for a good cause.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.impactSection} ${styles.impactSectionOffWhite}`}>
            <div className={styles.sectionContent}>
              <h2 className={styles.sectionTitle}>Community Engagement</h2>
              <div className={styles.activityGrid}>
                <div className={styles.activityCard}>
                  <h3>Music & Entertainment</h3>
                  <p>Music-related events at community homes, movie nights, and Instagram livestreams to spread awareness.</p>
                </div>
                <div className={styles.activityCard}>
                  <h3>Educational Programs</h3>
                  <p>Sign language classes in partnership with ASL Club at BR, and educational workshops about hearing health.</p>
                </div>
                <div className={styles.activityCard}>
                  <h3>Volunteer Opportunities</h3>
                  <p>Activities at community homes like elder care centers, providing meaningful volunteer experiences.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.impactSection} ${styles.impactSectionWhite}`}>
            <div className={styles.sectionContent}>
              <h2 className={styles.sectionTitle}>Partnerships & Collaborations</h2>
              <div className={styles.partnershipGrid}>
                <div className={styles.partnershipCard}>
                  <h3>National Organizations</h3>
                  <ul>
                    <li>Hearing Loss Association of America</li>
                    <li>Hearing Charities of America</li>
                    <li>World Wide Hearing (WWH)</li>
                    <li>Hearing Health Foundation (HHF)</li>
                  </ul>
                </div>
                <div className={styles.partnershipCard}>
                  <h3>School Partnerships</h3>
                  <p>Collaborating with other clubs at respective schools to expand our reach and impact in educational communities.</p>
                </div>
                <div className={styles.partnershipCard}>
                  <h3>Community Drives</h3>
                  <p>Clothing drives at school and community locations, with potential expansion to food drives in partnership with RFP.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.impactSection} ${styles.impactSectionOffWhite}`}>
            <div className={styles.sectionContent}>
              <h2 className={styles.sectionTitle}>How We Help</h2>
              <div className={styles.helpGrid}>
                <div className={styles.helpCard}>
                  <h3>Hearing Aid Support</h3>
                  <p>We buy hearing aids through money raised and secure discount deals to make them more accessible to those in need.</p>
                </div>
                <div className={styles.helpCard}>
                  <h3>Gift Baskets</h3>
                  <p>We provide gift baskets to hearing-impaired individuals and their families as a gesture of support and care.</p>
                </div>
                <div className={styles.helpCard}>
                  <h3>Awareness & Education</h3>
                  <p>Through podcasts, events, and partnerships, we raise awareness about hearing health and the challenges faced by the hearing-impaired community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}