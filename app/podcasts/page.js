import styles from './page.module.css';

export const metadata = {
  title: "Podcasts",
  description: "Stories from the Hearing Loss Community - AudibleSmiles podcast series featuring inspiring stories from people who have experienced hearing loss, educating and raising awareness about hearing health.",
  keywords: [
    "hearing loss podcast",
    "deaf community stories",
    "hearing health awareness",
    "audible smiles podcast",
    "hearing loss experiences",
    "deaf advocacy",
    "hearing aid stories",
    "hard of hearing community"
  ],
  openGraph: {
    title: "Podcasts | AudibleSmiles",
    description: "Stories from the Hearing Loss Community - AudibleSmiles podcast series featuring inspiring stories from people who have experienced hearing loss, educating and raising awareness about hearing health.",
    images: [
      {
        url: '/Transparent_Logo.png',
        width: 1200,
        height: 630,
        alt: 'AudibleSmiles Podcasts',
      },
    ],
  },
  twitter: {
    title: "Podcasts | AudibleSmiles",
    description: "Stories from the Hearing Loss Community - AudibleSmiles podcast series featuring inspiring stories from people who have experienced hearing loss, educating and raising awareness about hearing health.",
  },
};

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