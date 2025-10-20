import styles from './page.module.css';

export default function Podcasts() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Stories from the Hearing Loss Community</h1>
      </div>
      
      <div className={styles.content}>
        <div className={styles.placeholder}>
          <h2>Podcast Episodes Coming Soon</h2>
          <p>We&apos;re currently working on our podcast series featuring inspiring stories from people who have experienced hearing loss. Stay tuned for episodes that will educate, inspire, and raise awareness!</p>
        </div>
      </div>
    </div>
  );
}