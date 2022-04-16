import React from "react";
import Image from "next/image";

import logo from "../../public/assests/Icons/LOGO-01.png";
import styles from "../styles/components/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} height={130} width={199} alt="" objectFit="contain" />
      </div>
      <p>
        We are Europes first premium long-distance coach provider. We have made
        it our mission to offer first-class travel at economy prices
      </p>

      <div className={styles.horizontalLine}></div>
      <ul className={styles.navigation}>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>FEATURES</li>
        <li>NEWSROOM</li>
        <li>CONTACT</li>
      </ul>
    </footer>
  );
};

export default Footer;
