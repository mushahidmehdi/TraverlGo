import { useState } from "react";

import styles from "../styles/Home.module.css";
import {
  FlightInfo,
  Navbar,
  Footer,
  FlightDetail,
  FlightInfoDesk,
} from "../components";

export default function Home() {
  const [booking, setBooking] = useState(false);
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.heading}>
          <h1>First class travel at economy prices</h1>
        </div>
        <p>Select a tour that suits you below.</p>
        <div className={styles.flightInfo}>
          <FlightInfo />
        </div>
        <div className={styles.flightInfoDesk}>
          <FlightInfoDesk />
        </div>

        {booking ? <FlightDetail /> : ""}
      </main>
      {/* <Footer /> */}
    </>
  );
}
