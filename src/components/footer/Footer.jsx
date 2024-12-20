import React from 'react'
import styles from "./footer.module.css";
import instagram from "/public/2.png";
import x from "/public/3.png";
import fb from "/public/1.png";

import Image from 'next/image';
import Link from 'next/link';


export const Socials = [
    {
      name: "twitter",
      src: x,
     
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
