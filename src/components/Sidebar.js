import React from "react";
import Image from "next/image";

import logo from "../../public/assests/Icons/LOGO-01.png";
import styles from "../styles/components/sidebar.module.css";

import { X } from "react-feather";

const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <section className={styles.container}>
      <div className={styles.sidebarClose}>
        <div className={styles.logo}>
          <Image
            src={logo}
            height={85}
            width={149}
            alt=""
            objectFit="contain"
          />
        </div>
        <div className={styles.close}>
          <X onClick={() => setSidebarOpen(!sidebarOpen)} />
        </div>
      </div>
      <div>
        <ul className={styles.navigation}>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>FEATURES</li>
          <li>NEWSROOM</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className={styles.button}>
        <button>BOOK NOW</button>
      </div>
    </section>
  );
};

export default Sidebar;
