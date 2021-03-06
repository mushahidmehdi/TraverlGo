import styles from "../styles/form.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import plane from "../../public/assests/Icons/plane.png";

import { Navbar, Footer, FlightDetail } from "../components";
import PassengerForm from "../components/PassengerForm";

export default function Form() {
  const router = useRouter();
  const data = router.query;

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.heading}>
          <h1>First class travel at economy prices</h1>
        </div>
        <div className={styles.formBody}>
          <div>
            <PassengerForm />
          </div>
          <div>
            <FlightDetail booking={data} btn="none" />
          </div>
        </div>
        <div className={styles.planeImg}>
          <Image
            src={plane}
            height={580}
            width={470}
            alt=""
            objectFit="contain"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
