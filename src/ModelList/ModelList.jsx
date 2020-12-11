import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import ModelListItem from "../ModelListItem/ModelListItem";
import styles from "./ModelList.module.css";

const ModelList = (props) => {
  const [fetchedModels, setFetchedModels] = useState({});

  useEffect( () => {
    const fetchModels = async () => {
      const result = await fetch("http://demo1468395.mockable.io/brands");
      const response = await result.json()
      console.log(JSON.stringify(Object.values(response['BMW']['model'])));
      setFetchedModels(response);
    };

    if(isEmpty(fetchedModels)) {
      fetchModels();
    }
  }, [fetchedModels]);

  let displayAllModels;
  if(!isEmpty(fetchedModels)){
    let oneBrand = fetchedModels[props.brand]['model'];
    displayAllModels = (
      <div>
        <ul className={styles.modelList}>
          {Object.values(oneBrand).map((model, index) => (
            <Link key={index} to={"/cars/"+props.brand+"/"+model.modelId}>
              <li key={index}>
                <ModelListItem model={model} key={index} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  } else {
    displayAllModels = null;
  }

  return (
    displayAllModels
  );
}
export default ModelList;
