import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCircleUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

// <-- import styles to be used

import React, { useState } from "react";
import style from "../styles/Header.module.css";

export default function Header() {
  const [modal, setModal] = useState(false);
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
            <div className={style.userBox}>
              <FontAwesomeIcon icon={faBars} />
              <FontAwesomeIcon icon={faCircleUser} />
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
