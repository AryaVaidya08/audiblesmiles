'use client';

import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { funnelSansClassName } from '../fontStyles/funnelSans';
import styles from './page.module.css';

export default function FAQClient() {
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "What is Audible Smiles?",
      answer: "Audible Smiles is a nonprofit organization dedicated to supporting the hearing-impaired community through various programs, resources, and advocacy efforts. We work to create awareness, provide support, and improve the quality of life for individuals with hearing challenges."
    },
    {
      id: 2,
      question: "How can I get involved with Audible Smiles?",
      answer: "There are many ways to get involved! You can volunteer with our programs, donate to support our mission, participate in our events, or help spread awareness about hearing impairment issues. Visit our contact page to learn more about current opportunities."
    },
    {
      id: 3,
      question: "Do you provide hearing aids or medical services?",
      answer: "While we don't directly provide medical services or hearing aids, we can connect you with resources and organizations that do. We focus on community support, education, and advocacy rather than medical treatment."
    },
    {
      id: 4,
      question: "Are your services free?",
      answer: "Yes, most of our community programs and resources are provided free of charge. We believe that support for the hearing-impaired community should be accessible to everyone, regardless of financial circumstances."
    },
    {
      id: 5,
      question: "How can I donate to Audible Smiles?",
      answer: "You can donate through our website, participate in our fundraising events, or contact us directly to discuss other ways to support our mission. Every contribution helps us expand our programs and reach more people in need."
    },
    {
      id: 6,
      question: "Do you offer support groups?",
      answer: "Yes, we organize regular support groups and community meetups for individuals with hearing impairments and their families. These groups provide emotional support, share experiences, and offer practical advice for daily living."
    },
    {
      id: 7,
      question: "Can I volunteer if I don't have hearing impairment?",
      answer: "Absolutely! We welcome volunteers from all backgrounds. Whether you have hearing impairment or not, your support and dedication to our cause is valuable. We provide training and guidance for all our volunteers."
    },
    {
      id: 8,
      question: "How do I contact Audible Smiles?",
      answer: "You can reach us through our website contact form, email us directly, or call our office during business hours. We also maintain active social media presence where you can connect with us and stay updated on our activities."
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={styles.content}>
      <div className={styles.faqContainer}>
        {faqData.map((item) => (
          <div key={item.id} className={styles.faqItem}>
            <button 
              className={styles.questionButton}
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItems.has(item.id)}
            >
              <span className={`${styles.questionText} ${funnelSansClassName}`}>{item.question}</span>
              <IoChevronDown className={`${styles.arrow} ${openItems.has(item.id) ? styles.arrowOpen : ''}`} />
            </button>
            <div className={`${styles.answerContainer} ${openItems.has(item.id) ? styles.answerOpen : ''}`}>
              <div className={styles.answer}>
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
