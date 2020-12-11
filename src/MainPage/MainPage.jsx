import React from "react";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";
import bmw from "../images/MainPage/bmw_i8.png";
import audi from "../images/MainPage/Audi.jpg";

const MainPage = () => {
  return (
    <div>
      <div className={styles.descripePart}>
        <h1>Lexi's Car Shop </h1>
        <h4>Meet You Match</h4>
        <p className={styles.pDetail}>While every car in the Lexi'S family offers innovative technology, exceptional efficiency and impressive safety features, each one has a personality all its own. Whether you’re looking for a spunky sidekick for your next urban adventure or a sophisticated sedan for nights out on the town, there’s a Chevrolet car that’s a perfect fit.</p>
      </div>
      <div className={styles.gridContainer}>
        <div>
          <Link to="/cars/BMW">
            <img className={styles.image} src={bmw} alt="bmw i8 "/>
          </Link>
          <div className={styles.gridFont}>
            <p>BMW i8 </p>
            <p> $100,000+ </p>
            <p>Lowest Price</p>
            <p>up to 80% off!</p>
          </div>
        </div>
        <div>
          <Link to="/cars/Audi">
            <img className={styles.image}  src={audi} alt="audi r8 "/>
          </Link>
          <div className={styles.gridFont}>
            <p>Audi R8</p>
            <p>$100,000+</p>
            <p>Lowest Price</p>
            <p>up to 85% off!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage;
