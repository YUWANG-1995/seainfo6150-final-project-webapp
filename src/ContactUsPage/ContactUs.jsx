import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h1>CONTACT US</h1>
      <div>
        <address>
             401 Terry Ave N #103<br/>
             Seattle, WA 98109<br/>
             USA<br/>
            <a href="mailto:wang.yu14@northeastern.edu">Custoer Service Email</a><br/>
            Call us : +1 (877)-668-7727<br/>
        </address>
      </div>
    </div>
  )
}

export default ContactUs
