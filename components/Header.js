import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCircleUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

// <-- import styles to be used

import React, { useEffect, useRef, useState } from "react";
import style from "../styles/Header.module.css";

export default function Header() {
  const [modal, setModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const cartRef = useRef(null);
  useEffect(() => {
    const handler = (event) => {
      if (!cartRef.current?.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <div className={style.header_container}>
        <div className={style.left}>
          <img
            alt="airbnb logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          />
        </div>

        <div className={style.right}>
          <div>Become a Host</div>
          <div>
            <FontAwesomeIcon onClick={() => setModal(!modal)} icon={faGlobe} />
          </div>
          <div>
            <div ref={cartRef} className={style.dorpdown_container}>
              <div
                className={style.userBox}
                onClick={() => setDropdown(!dropdown)}
              >
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon
                  style={{ marginRight: "0", fontSize: "25px" }}
                  icon={faCircleUser}
                />
              </div>
              <div
                className={dropdown ? style.show_dropdown : style.dropdown_box}
              >
                <div className={style.content}>
                  <h5>Sign up</h5>
                  <p>Log in</p>
                </div>
                <hr />
                <div className={style.content}>
                  <p>Host your home</p>
                  <p>Host an experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={modal ? `${style.showModal}` : `${style.modal}`}>
        <FontAwesomeIcon
          className={style.crossMark}
          onClick={() => setModal(!modal)}
          icon={faCircleXmark}
        />
      </div>
    </>
  );
}
