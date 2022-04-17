import React from "react";
import Image from "next/image";
import styles from "../styles/components/flightInfo.module.css";
import flight from "../../public/assests/Icons/jet-fighter-solid-01.png";
import flight1 from "../../public/assests/Icons/plane-circle-check-solid-01.png";

const FlightInfo = ({ index, item, setBooking }) => {
  return (
    <section className={styles.container} onClick={() => setBooking(item)}>
      <div className={styles.rowOne}>
        <div className={styles.rowOneColOne}>
          <div className={styles.flightInfoImage}>
            {index % 2 === 0 ? (
              <Image
                src={flight1}
                width={45}
                height={45}
                objectFit="contain"
                alt=""
              />
            ) : (
              <Image
                src={flight}
                width={45}
                height={45}
                objectFit="contain"
                alt=""
              />
            )}
          </div>
          <div className={styles.flightInfoRow}>
            <p>{item.duration}</p>
            <p>{item.airline}</p>
          </div>
        </div>
        <p>{item.price.total}</p>
      </div>
      <div className={styles.rowTwo}>
        <div className={styles.flightInfoRow}>
          <p>
            {item.departure_time} - {item.arrival_time}
          </p>
          <p>{item.stop_detail}</p>
        </div>
        <div className={styles.flightInfoRow}>
          <p>{item.stop}</p>
          <p>{item.trip_type}</p>
        </div>
      </div>
    </section>
  );
};

export default FlightInfo;
