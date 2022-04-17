import styles from "../styles/success.module.css";
import Image from "next/image";

import { useSelector } from "react-redux";
import { X } from "react-feather";

import { Navbar, Footer } from "../components";
import Luggage from "../../public/assests/Icons/Luggage.png";

export default function Fail() {
  const data = useSelector((state) => state);

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
