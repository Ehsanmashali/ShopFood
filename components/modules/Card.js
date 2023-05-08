/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Location from "../icons/Location";

import styles from "./Card.module.css";

const Card = (props) => {
  const { id, name, price, details, discount } = props;
  return (
    <div className={styles.container}>
      <img src={`/images/${id}.jpeg`} alt={name} />
      <div className={styles.details}>
        <h4>{name}</h4>
        <div>
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={styles.price}>
        {discount ? (
          <span className={styles.discount}>
            {(price * (100 - discount)) / 100}$
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount > 0 && <div className={styles.badge}>{discount}%</div>}
      </div>
      <Link href={`/menu/${id}`}>See Details</Link>
    </div>
  );
};

export default Card;
