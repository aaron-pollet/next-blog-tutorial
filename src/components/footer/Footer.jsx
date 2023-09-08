import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src='/logo.png'
            alt=''
            width={50}
            height={50}
          />
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque alias fugit quos, iure
          odio eos architecto officiis. Sed, cumque? Sapiente deserunt ex repudiandae reprehenderit
          aperiam officia obcaecati? Praesentium, odit doloribus.
        </p>
        <div className={styles.icons}>
          <Image
            src='/instagram.png'
            alt='instagram'
            width={20}
            height={20}
          />
          <Image
            src='/facebook.png'
            alt='facebook'
            width={20}
            height={20}
          />
          <Image
            src='/youtube.png'
            alt='youtube'
            width={20}
            height={20}
          />
          <Image
            src='/tiktok.png'
            alt='tiktok'
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className={styles.links}></div>
    </div>
  );
};

export default Footer;
