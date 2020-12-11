import React from "react";
import styles from "./ModelListItem.module.css";

const ModelListItem = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.model.image} alt="it's a model" />
      <p className={styles.modelName}>Model: {props.model.modelId}</p>
    </div>
  );
}

export default ModelListItem;
