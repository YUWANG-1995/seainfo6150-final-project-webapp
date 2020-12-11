import React from "react";
import { Link } from "react-router-dom";
import BrandListItem from "../BrandListItem/BrandListItem";
import styles from "./BrandList.module.css";

const BrandList = (props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.carList}>
        {props.brands.map((brand, index) => (
        <Link key={index} to={"/cars/"+brand.brand}>
        <li key={index}>
            <BrandListItem brand={brand} key={index} />
        </li>
        </Link>
      ))}
      </ul>
    </div>
  );
}

export default BrandList;
