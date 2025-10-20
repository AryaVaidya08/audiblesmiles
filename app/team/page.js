import styles from './page.module.css';
import Image from 'next/image';

export const metadata = {
  title: "Our Team",
  description: "Meet the dedicated team behind AudibleSmiles - passionate students and supervisors working together to support the hearing-impaired community through fundraising, outreach, and community engagement.",
  keywords: [
    "audible smiles team",
    "nonprofit leadership",
    "hearing loss advocates",
    "bridgewater raritan high school",
    "student volunteers",
    "hearing aid fundraising",
    "community organizers",
    "nonprofit directors"
  ],
  openGraph: {
    title: "Our Team | AudibleSmiles",
    description: "Meet the dedicated team behind AudibleSmiles - passionate students and supervisors working together to support the hearing-impaired community through fundraising, outreach, and community engagement.",
    images: [
      {
        url: '/Transparent_Logo.png',
        width: 1200,
        height: 630,
        alt: 'AudibleSmiles Team',
      },
    ],
  },
  twitter: {
    title: "Our Team | AudibleSmiles",
    description: "Meet the dedicated team behind AudibleSmiles - passionate students and supervisors working together to support the hearing-impaired community through fundraising, outreach, and community engagement.",
  },
};

export default function Team() {
  const teamStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AudibleSmiles",
    "description": "Meet the dedicated team behind AudibleSmiles - passionate students and supervisors working together to support the hearing-impaired community.",
    "member": [
      {
        "@type": "Person",
        "name": "Amay Naik",
        "jobTitle": "Executive Director",
        "description": "Amay is a senior at Bridgewater Raritan High School who founded this organization to help hearing impaired people like himself, that don't have access to financial support.",
        "image": "https://audiblesmiles.org/Headshots/Amay_Headshot.png"
      },
      {
        "@type": "Person",
        "name": "Agastya Shahane",
        "jobTitle": "Assistant Director",
        "description": "Agastya is a senior at Bridgewater-Raritan High School who assisted in founding this organization to help bring awareness to those deaf and hard of hearing.",
        "image": "https://audiblesmiles.org/Headshots/Agastya_Headshot.png"
      },
      {
        "@type": "Person",
        "name": "Ohmal Suresh",
        "jobTitle": "Fundraising Director",
        "description": "Ohmal is a senior at Bridgewater-Raritan High School who's been a consistent member of Audible Smiles since his junior year.",
        "image": "https://audiblesmiles.org/Headshots/Ohmal_Headshot.png"
      },
      {
        "@type": "Person",
        "name": "Arya Vaidya",
        "jobTitle": "Web Development Director",
        "description": "Arya is a senior who joined Audible Smiles to support the journey and individuals to help people with hearing loss, a challenge he has personally experienced.",
        "image": "https://audiblesmiles.org/Headshots/Arya_Headshot.png"
      },
      {
        "@type": "Person",
        "name": "Anik Shah",
        "jobTitle": "Outreach Director",
        "description": "Anik joined Audible Smiles because he wants to make an impact on people's lives by raising money for hearing aids.",
        "image": "https://audiblesmiles.org/Headshots/Anik_Headshot.png"
      },
      {
        "@type": "Person",
        "name": "Kavin Kartigayan",
        "jobTitle": "Treasury Director",
        "description": "Kavin joined Audible Smiles because he wants to make a meaningful impact by helping others and contributing to a positive cause.",
        "image": "https://audiblesmiles.org/Headshots/Kavin_Headshot.png"
      },
      {
        "@type": "Person",
        "name": "Sharvan Urs",
        "jobTitle": "Secretary",
        "description": "Sharvan has been apart of Audible Smiles for a year and a half and is looking forward to opening new chapters and raising as much money for hearing aids as possible.",
        "image": "https://audiblesmiles.org/Headshots/Sharvan_Headshot.png"
      }
    ]
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamStructuredData) }}
      />
      <div className={styles.header}>
        <h1 className={styles.title}>Meet the Team Behind Audible Smiles</h1>
      </div>
      
      <div className={styles.content}>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.profileImageContainer}>
              <Image 
                src="/Headshots/Amay_Headshot.png" 
                alt="Amay Naik" 
                width={120} 
                height={120} 
                className={styles.profileImage}
              />
            </div>
            <h3 className={styles.memberName}>Amay Naik</h3>
            <p className={styles.memberRole}>Executive Director</p>
            <p className={styles.memberBio}>Amay is a senior at Bridgewater Raritan High School who founded this organization to help hearing impaired people like himself, that don&apos;t have access to financial support. In his free time, he likes to write fantasy, run, and do wildlife photography!</p>
          </div>
          
          <div className={styles.teamMember}>
            <div className={styles.profileImageContainer}>
              <Image 
                src="/Headshots/Agastya_Headshot.png" 
                alt="Agastya Shahane" 
                width={120} 
                height={120} 
                className={styles.profileImage}
              />
            </div>
            <h3 className={styles.memberName}>Agastya Shahane</h3>
            <p className={styles.memberRole}>Assistant Director</p>
            <p className={styles.memberBio}>Agastya is a senior at Bridgewater-Raritan High School who assisted in founding this organization to help bring awareness to those deaf and hard of hearing. In his free time, he enjoys playing his instrument, watching movies, and spending time with his family!</p>
          </div>
          
          <div className={styles.teamMember}>
            <div className={styles.profileImageContainer}>
              <Image 
                src="/Headshots/Ohmal_Headshot.png" 
                alt="Ohmal Suresh" 
                width={120} 
                height={120} 
                className={styles.profileImage}
              />
            </div>
            <h3 className={styles.memberName}>Ohmal Suresh</h3>
            <p className={styles.memberRole}>Fundraising Director</p>
            <p className={styles.memberBio}>Ohmal is a senior at Bridgewater-Raritan High School who&apos;s been a consistent member of Audible Smiles since his junior year. He is passionate about public speaking, reading, and playing volleyball.</p>
          </div>
          
          <div className={styles.teamMember}>
            <div className={styles.profileImageContainer}>
              <Image 
                src="/Headshots/Arya_Headshot.png" 
                alt="Arya Vaidya" 
                width={120} 
                height={120} 
                className={styles.profileImage}
              />
            </div>
            <h3 className={styles.memberName}>Arya Vaidya</h3>
            <p className={styles.memberRole}>Web Development Director</p>
            <p className={styles.memberBio}>Arya is a senior who joined Audible Smiles to support the journey and individuals to help people with hearing loss, a challenge he has personally experienced. In his spare time, he loves to hang out with friends, hike, and play soccer.</p>
          </div>
          
          <div className={styles.teamMember}>
            <div className={styles.profileImageContainer}>
              <Image 
                src="/Headshots/Anik_Headshot.png" 
                alt="Anik Shah" 
                width={120} 
                height={120} 
                className={styles.profileImage}
              />
            </div>
            <h3 className={styles.memberName}>Anik Shah</h3>
            <p className={styles.memberRole}>Outreach Director</p>
            <p className={styles.memberBio}>Anik joined Audible Smiles because he wants to make an impact on people&apos;s lives by raising money for hearing aids. In his spare time, he enjoys biking, reading, and traveling.</p>
          </div>
          
          <div className={styles.teamMember}>
            <div className={styles.profileImageContainer}>
              <Image 
                src="/Headshots/Kavin_Headshot.png" 
                alt="Kavin Kartigayan" 
                width={120} 
                height={120} 
                className={styles.profileImage}
              />
            </div>
            <h3 className={styles.memberName}>Kavin Kartigayan</h3>
            <p className={styles.memberRole}>Treasury Director</p>
            <p className={styles.memberBio}>Kavin joined Audible Smiles because he wants to make a meaningful impact by helping others and contributing to a positive cause. He enjoys taking initiative and working with others to create change. In his free time, he goes for long runs, learns about cars, and spends time with friends.</p>
          </div>
          
          <div className={styles.teamMember}>
            <div className={styles.profileImageContainer}>
              <Image 
                src="/Headshots/Sharvan_Headshot.png" 
                alt="Sharvan Urs" 
                width={120} 
                height={120} 
                className={styles.profileImage}
              />
            </div>
            <h3 className={styles.memberName}>Sharvan Urs</h3>
            <p className={styles.memberRole}>Secretary</p>
            <p className={styles.memberBio}>Sharvan has been apart of Audible Smiles for a year and a half and is looking forward to opening new chapters and raising as much money for hearing aids as possible.</p>
          </div>
        </div>
        
        <div className={styles.supervisorsSection}>
          <h2 className={styles.sectionTitle}>Supervisors & Benefactors</h2>
          <div className={styles.supervisorsGrid}>
            <div className={styles.supervisorCard}>
              <h3 className={styles.supervisorName}>Christine Peliotis</h3>
              <p className={styles.supervisorRole}>Main Supervisor</p>
              <p className={styles.supervisorContact}>cpeliotis@brrsd.k12.nj.us</p>
            </div>
            
            <div className={styles.supervisorCard}>
              <h3 className={styles.supervisorName}>Quincy Goodwine Jr.</h3>
              <p className={styles.supervisorRole}>Assistant Supervisor</p>
              <p className={styles.supervisorContact}>quincy.goodwine@cancer.org</p>
            </div>
            
            <div className={styles.supervisorCard}>
              <h3 className={styles.supervisorName}>Priya Mangano</h3>
              <p className={styles.supervisorRole}>Benefactor</p>
              <p className={styles.supervisorContact}>pmangano@brrsd.k12.nj.us</p>
            </div>
            
            <div className={styles.supervisorCard}>
              <h3 className={styles.supervisorName}>Brian McClintock</h3>
              <p className={styles.supervisorRole}>Benefactor</p>
              <p className={styles.supervisorContact}>brian.mcclintock@agcs.allianz.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}