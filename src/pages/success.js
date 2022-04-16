import styles from "../styles/success.module.css";
import Image from "next/image";

import Luggage from "../../public/assests/Icons/Luggage.png";
import worldMap from "../../public/assests/Icons/worldMap.png";

import { Navbar, Footer } from "../components";
import { X } from "react-feather";

export default function Fail() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.alert}>
          <p>Your flight has been booked successfully! Have a great trip!</p>
          <X color="#1D8C78" width={80} />
        </div>

        <div className={styles.spaceManImg}>
          <Image
            src={Luggage}
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
