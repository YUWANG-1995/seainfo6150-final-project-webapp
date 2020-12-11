import React from "react";
import logo1 from "../images/logos/aboutusLogo.png";
import logo2 from "../images/logos/logo2.png";
import logo3 from "../images/logos/logo3.jpeg";
import pic from "../images/AboutusPage/customer.png";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <div>
      <picture>
         <source media="(max-width: 600px)"
            srcSet={logo3}
         />
         <source media="(max-width: 1200px)"
            srcSet={logo2}
         />
         <img className={styles.tupian} src={logo1} alt="sports car" />
      </picture>

      </div>
      <div className={styles.container}>
        <h3>Our History</h3>
        <p>we are a new car dealer company, we start from 2020, our groups
         are consist of all young people, we have a team of experts ready to provide
         you a best service to make you have a memorable experience.
        </p>
      </div>
      <div className={styles.serviceDisplay}>
        <div>
          <img className={styles.tupian} src={pic} alt="customer service tupian" />
        </div>
        <div className={styles.container}>
          <h3>Our Service</h3>
          <p>we provide 7x24 hours service, if you meet any problems, please contact me immediately,
             we will provide professional and timely service.
             we also provide 1 vs 1 personal assistant, our assistant will help you solve any problems,
             and we will collect your feedback every year.
          </p>
        </div>
      </div>
     </div>
  )
}

export default AboutUs;
