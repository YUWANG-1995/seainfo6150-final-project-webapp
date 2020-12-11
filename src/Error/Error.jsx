import React from 'react'
import error from "../images/Error/error.png";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className={styles.container}>
          <div>
            <p className={styles.text}>
              404 Not Found !<br />
              Ooops, here is something wrong.<br/>
              <Link to="/"><span>Click me back to home page</span></Link>
            </p>
          </div>
          <div>
            <img src={error} alt="404 Not Found" />
          </div>
        </div>
    )
}

export default Error
