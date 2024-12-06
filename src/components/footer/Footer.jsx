import React from 'react'
import styles from "./footer.module.css";
import instagram from "/public/instagram.svg";
import linkdn from "/public/lkdn.png";
import fb from "/public/facebook.svg";

import Image from 'next/image';
import Link from 'next/link';


export const Socials = [
    {
      name: "Linkdin",
      src: linkdn,
     
    },
    {
      name: "Facebook",
      src: fb,
     
    },
    {
      name: "Instagram",
      src: instagram
    
    },
  ];

const Footer = () => {
  return (
    <div className={styles.container}>

<div>©2024 ITSolutions. All rights reserved.</div>
<div className={styles.social}>
{Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
</div>
      
    </div>
  )
}

export default Footer
