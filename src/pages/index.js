import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "../styles/Home.module.css";
import { fetchFlightList } from "../state/actions";

import {
  FlightInfo,
  Navbar,
  Footer,
  FlightDetail,
  FlightInfoDesk,
} from "../components";

export default function Home() {
  const [booking, setBooking] = useState(false);
  const { flightList } = useSelector((state) => state.flightDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlightList());
  }, []);
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.heading}>
          <h1>First class travel at economy prices</h1>
        </div>
        <p>Select a tour that suits you below.</p>
        <div className={styles.flightInfo}>
          {flightList?.slice(0, 3).map((item, idx) => (
            <div key={idx}>
              <FlightInfo index={idx} item={item} setBooking={setBooking} />
            </div>
          ))}

          {booking ? <FlightDetail booking={booking} /> : ""}
        </div>
        <div className={styles.flightInfoDesk}>
          <div className={styles.flightInfoDeskRow}>
            {flightList?.map((item, idx) => (
              <div key={idx}>
                <FlightInfoDesk
                  index={idx}
                  item={item}
                  setBooking={setBooking}
                />
              </div>
            ))}
          </div>
          {booking ? <FlightDetail booking={booking} /> : ""}
        </div>
      </main>
      <Footer />
    </>
  );
}
