import React from "react";
import Image from "next/image";

import flight1 from "../../public/assests/Icons/plane-circle-check-solid-01.png";
import styles from "../styles/components/flightDetail.module.css";

const FlightDetail = () => {
  return (
    <section className={styles.container}>
      <div className={styles.flightDetail}>
        <div className={styles.flightImg}>
          <Image
            src={flight1}
            width={45}
            height={45}
            objectFit="contain"
            alt=""
          />
        </div>
        <div className={styles.flightDetailInfo}>
          <h5>Hawaiian Airlines</h5>
          <p>FIG4312</p>
        </div>

        <div className={styles.flightDetailTiming}>
          <p>16h 45m (+1d)</p>
          <p>7:00 AM - 4:15 PM</p>
          <p>2h 45m in HNL</p>
        </div>
      </div>

      <div className={styles.charges}>
        <div className={styles.chargesRow}>
          <span>Subtotal</span>
          <p>$ 500</p>
        </div>
        <div className={styles.chargesRow}>
          <span>Taxes and Fees</span>
          <p>$ 121</p>
        </div>
        <div className={styles.chargesRow}>
          <span>Total</span>
          <p>$ 621</p>
        </div>
      </div>
      <button>Next</button>
    </section>
  );
};

export default FlightDetail;
