import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import styles from "./CarDetail.module.css";

const CarDetail = (props) => {
  const [fetchedCars, setFetchedCars] = useState({});

  useEffect( () => {
    const fetchCars = async () => {
      const result = await fetch("http://demo1468395.mockable.io/brands")
      const response = await result.json();
      setFetchedCars(response);
    };

    if(isEmpty(fetchCars)) {
      fetchCars();
    }
  }, []);

  let displayCarDetail;
  if(!isEmpty(fetchedCars)){
    let oneCar = fetchedCars[props.brand]['model'][props.model];
    displayCarDetail = (
      <div className={styles.container}>
        <img className={styles.image} src={oneCar.image} alt="it's a car detail data"/>
        <h4 className={styles.prices}>Price: {oneCar.price} </h4>
        <p className={styles.descripe}>design: {oneCar.introduction} </p>
        <Link to={"/cars/"+props.brand+"/"+props.model+"/ordersDetail"} >
          <button className={styles.button} type="button">Order it</button>
        </Link>
      </div>
    );
  }else{
    displayCarDetail=null;
  }

  return (
    displayCarDetail
  );
}

export default CarDetail;
