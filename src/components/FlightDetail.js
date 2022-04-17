import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import flight1 from "../../public/assests/Icons/plane-circle-check-solid-01.png";
import styles from "../styles/components/flightDetail.module.css";

const FlightDetail = ({ booking, btn }) => {
  const router = useRouter();

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
          <p>{booking?.price?.subTotal ? booking?.price?.subTotal : "$ 550"}</p>
        </div>
        <div className={styles.chargesRow}>
          <span>Taxes and Fees</span>
          <p>{booking?.price?.fees ? booking?.price?.fees : "$ 120"}</p>
        </div>
        <div className={styles.chargesRow}>
          <span>Total</span>
          <p>{booking?.price?.total ? booking?.price.total : "$ 670"}</p>
        </div>
      </div>
      <button
        style={{ display: btn }}
        onClick={() =>
          router.push({
            pathname: "/form",
            query: booking,
          })
        }
      >
        Next
      </button>
    </section>
  );
};

export default FlightDetail;
