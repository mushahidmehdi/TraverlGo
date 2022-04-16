import styles from "../styles/fail.module.css";
import Image from "next/image";
import spaceMan from "../../public/assests/Icons/spaceMan.png";
import worldMap from "../../public/assests/Icons/worldMap.png";

import { Navbar, Footer } from "../components";
import { X } from "react-feather";

export default function Fail() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.alert}>
          <p>
            Your credit card payment was rejected by your bank. Please try again
            and contact your bank for assistance.
          </p>
          <X color="#A40000" width={80} />
        </div>

        <div className={styles.spaceManImg}>
          <Image
            src={spaceMan}
            height={380}
            width={370}
            alt=""
            objectFit="contain"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
