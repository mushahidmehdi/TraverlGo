import React from "react";
import Image from "next/image";
import styles from "../styles/components/flightInfo.module.css";
import flight from "../../public/assests/Icons/jet-fighter-solid-01.png";
import flight1 from "../../public/assests/Icons/plane-circle-check-solid-01.png";

const FlightInfo = ({ index = 2 }) => {
  return (
    <section className={styles.container}>
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
            <p>16h 45m</p>
            <p>Hawaiian Airlines</p>
          </div>
        </div>
        <p>$ Price</p>
      </div>
      <div className={styles.rowTwo}>
        <div className={styles.flightInfoRow}>
          <p>7:00AM - 4:15PM</p>
          <p>2h 45m in HNL</p>
        </div>
        <div className={styles.flightInfoRow}>
          <p>1 stop</p>
          <p>Round trip</p>
        </div>
      </div>
    </section>
  );
};

export default FlightInfo;
