import React from "react";
import styles from "./BrandListItem.module.css";

const BrandListItem = (props) => {
  return (
    <div className={styles.container}>
        <img className={styles.image} src={props.brand.brandImage._url} alt={props.brand.brand} />
        <p className={styles.brand}>{props.brand.brand}</p>
    </div>
  );
}

export default BrandListItem;
