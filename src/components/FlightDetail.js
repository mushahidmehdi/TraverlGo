import React from "react";
import Image from "next/image";

import flight1 from "../../public/assests/Icons/plane-circle-check-solid-01.png";
import styles from "../styles/components/flightDetail.module.css";

const FlightDetail = ({ booking }) => {
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
          <h5>{booking?.airline}</h5>
          <p>{booking?.flight_number}</p>
        </div>

        <div className={styles.flightDetailTiming}>
          <p>{booking?.duration}</p>
          <p>
            {booking?.departure_time} - {booking?.arrival_time}
          </p>
          <p>{booking?.stop_detail}</p>
        </div>
      </div>

      <div className={styles.charges}>
        <div className={styles.chargesRow}>
          <span>Subtotal</span>
          <p>{booking?.price.subTotal}</p>
        </div>
        <div className={styles.chargesRow}>
          <span>Taxes and Fees</span>
          <p>{booking?.price.fees}</p>
        </div>
        <div className={styles.chargesRow}>
          <span>Total</span>
          <p>{booking?.price.total}</p>
        </div>
      </div>
      <button>Next</button>
    </section>
  );
};

export default FlightDetail;
