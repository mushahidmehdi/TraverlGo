import React, { useState } from "react";
import Image from "next/image";

import Sidebar from "./Sidebar";

import logo from "../../public/assests/Icons/LOGO-01.png";
import styles from "../styles/components/navbar.module.css";

import { Menu } from "react-feather";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logoImgDesktop}>
        <Image src={logo} height={89} width={182} alt="" objectFit="contain" />
      </div>
      <div className={styles.logoImgMobile}>
        <Image src={logo} height={60} width={105} alt="" objectFit="contain" />
      </div>
      <div className={styles.menuIcon}>
        <Menu color="#424B5A" onClick={() => setSidebarOpen(!sidebarOpen)} />
      </div>
      {sidebarOpen ? (
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      ) : (
        ""
      )}

      <div className={styles.navigation}>
        <ul className={styles.navLinks}>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>FEATURES</li>
          <li>NEWSROOM</li>
          <li>CONTACT</li>
        </ul>
        <div className={styles.navButton}>
          <button>BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
