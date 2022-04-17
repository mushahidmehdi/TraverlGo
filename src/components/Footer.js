import React from "react";
import Image from "next/image";

import logo from "../../public/assests/Icons/LOGO-01.png";
import styles from "../styles/components/footer.module.css";
import { Twitter, Instagram, Facebook } from "react-feather";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.firstColumn}>
          <div className={styles.logo}>
            <Image
              src={logo}
              height={130}
              width={199}
              alt=""
              objectFit="contain"
            />
          </div>
          <p>
            We are Europes first premium long-distance coach provider. We have
            made it our mission to offer first-class travel at economy prices
          </p>
          <div className={styles.socialMediaIcons}>
            <Twitter color="#505D68" width={20} />
            <Facebook color="#505D68" width={20} />
            <Instagram color="#505D68" width={20} />
          </div>
        </div>

        <div className={styles.horizontalLine}></div>
        <div className={styles.secondColumn}>
          <ul className={styles.navigation}>
            <p>LINKS</p>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>NewsRoom</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.horizontalLine2}></div>
        <div className={styles.thirdColumn}>
          <span>CONTACT</span>
          <p>info@form.com</p>
          <p>882-587-3025</p>
          <p>6116 Willa River Suite 610</p>
        </div>
      </div>
      <div className={styles.horizontalLineEnd}></div>
    </footer>
  );
};

export default Footer;
