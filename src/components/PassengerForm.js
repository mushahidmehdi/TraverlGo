import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useRouter } from "next/router";

import styles from "../styles/components/passengerForm.module.css";
import { passengerDetail } from "../state/actions";

const PassengerForm = () => {
  const dispatch = useDispatch();
  const route = useRouter();

  const [focusName, setFocusName] = useState(false);
  const [focusSurName, setfocusSurName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [passengerForm, setPassengerForm] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
  });
  const { name, surname, email, address } = passengerForm;

  const handleOnChange = (e) => {
    setPassengerForm({ ...passengerForm, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(name, surname, email, address);
    dispatch(passengerDetail(name, surname, email, address));
  };

  return (
    <>
      <section className={styles.passengerForm}>
        <div className={styles.container}>
          <h1>Passenger Information</h1>
          <p>The information below is needed to book your vacation.</p>
          <form onSubmit={submit}>
            <div className={styles.formFields}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name*"
                value={name}
                onChange={handleOnChange}
                autoComplete="off"
                aria-describedby="reqNameFields"
                onFocus={() => setFocusName(true)}
                onBlur={() => setFocusName(false)}
                required=" "
              />
              <div
                className={
                  !name && focusName
                    ? styles.requiredInputField
                    : styles.requiredInputFieldOffScreen
                }
                id="reqNameFields"
              >
                <p>
                  First Name is required for booking your seat, Please Enter
                  your first name
                </p>
              </div>
            </div>
            <div className={styles.formFields}>
              <input
                type="surname"
                name="surname"
                id="surname"
                placeholder="Surname*"
                value={surname}
                onChange={handleOnChange}
                autoComplete="off"
                aria-describedby="reqSurNameFields"
                onFocus={() => setfocusSurName(true)}
                onBlur={() => setfocusSurName(false)}
                required=""
              />
              <div
                className={
                  !surname && focusSurName
                    ? styles.requiredInputField
                    : styles.requiredInputFieldOffScreen
                }
                id="reqSurNameFields"
              >
                <p>
                  Surname is required for booking your seat, Please Enter your
                  SurName
                </p>
              </div>
            </div>
            <div className={styles.formFields}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                value={email}
                onChange={handleOnChange}
                autoComplete="off"
                aria-describedby="reqEmailFields"
                onFocus={() => setFocusEmail(true)}
                onBlur={() => setFocusEmail(false)}
                required=""
              />
            </div>
            <div
              className={
                !email && focusEmail
                  ? styles.requiredInputField
                  : styles.requiredInputFieldOffScreen
              }
              id="reqEmailFields"
            >
              <p>
                Email is required for booking your seat, Please Enter your Email
              </p>
            </div>

            <div className={styles.formFields}>
              <input
                type="address"
                name="address"
                id="address"
                placeholder="Address"
                autoComplete="off"
                value={address}
                onChange={handleOnChange}
                aria-describedby="passwordNote"
              />
            </div>

            <button type="submit" onClick={() => route.push("/success")}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PassengerForm;
