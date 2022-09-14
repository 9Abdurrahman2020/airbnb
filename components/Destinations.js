import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import style from "../styles/Destination.module.css";
export default function Destinations({ destinations }) {
  return (
    <div className={style.container}>
      {destinations.length > 0 &&
        destinations.map(
          ({ _id, title, date, price, rating, kilometers, image }) => (
            <div key={_id} className={style.card}>
              <div className={style.favorite}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className={style.imgBox}>
                <img width="100%" height="250px" src={image} />
              </div>
              <div className={style.details}>
                <div className={style.title}>
                  <h4>
                    {title.length > 20 ? `${title.slice(0, 18)}..` : title}
                  </h4>
                  <p>
                    <FontAwesomeIcon icon={faStar} /> {rating ? rating : "New"}
                  </p>
                </div>
                <p>{kilometers} kilometers</p>
                <p>{date}</p>
                <h3>
                  ${price} <span className={style.night}>night</span>
                </h3>
              </div>
            </div>
          )
        )}
    </div>
  );
}
