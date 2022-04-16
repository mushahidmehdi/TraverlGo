import styles from "../styles/form.module.css";

import { Navbar, Footer, FlightDetail } from "../components";
import PassengerForm from "../components/PassengerForm";

export default function Form() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.heading}>
          <h1>First class travel at economy prices</h1>
        </div>
        <PassengerForm />
        <FlightDetail />
      </main>
      <Footer />
    </>
  );
}
