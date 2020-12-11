import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Form.module.css";

const Form = (props) => {
  const [submittedData, setSubmittedData] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedData(data);
  };

  return (
    <div className={styles.container}>
      {
        submittedData ? (
        <div>
          <p>Here is the details of your order and your information</p>
          <p>Please confirmed your detail of order</p>
          <p>Your name is <strong>{submittedData.get("name")}</strong></p>
          <p>Your eamil addreass is <strong>{submittedData.get("email")}</strong></p>
          <p>Your phone number is <strong>{submittedData.get("phone")}</strong></p>
          <p>You choose brand is <strong>{props.brand}</strong>, model is <strong>{props.model}</strong></p>
          <p>Your appointment day is <strong>{submittedData.get("date")}</strong></p>
          <p>Comment: {submittedData.get("comment") ? <strong>submittedData.get("comment")</strong> : "you have no comment"}</p>
          <Link to="/thankyou">
            <button className={styles.button} type="button">Confirm</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Your Name: </label>
          <input type="text" name="name" required/><br/>
          <label>Your Gender: </label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select><br/>
          <label>Appointment Time: </label>
          <select name="date">
            <option value="monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select><br/>
          <label>Your Email: </label>
          <input type="email" name="email" placeholder="123@321.com" required/><br/>
          <label>Your Phone: </label>
          <input type="tel" name="phone" placeholder="(xxx)-xxx-xxx" required/><br/>
          <label>Brand: </label>
          <input type="text" name="brand" value={props.brand} disabled /><br/>
          <label>Model: </label>
          <input type="text" name="model" value={props.model} disabled /><br/>
          <label>Quantity: </label>
          <input type="number" name="quantity" min="0"/><br/>
          <label>Comment: </label>
          <textarea name="comment" maxLength="1000" /><br/>

          <label>Where you know us ?</label><br/>
          <input type="radio" value="Facebook"/>
          <label>Facebook</label><br/>
          <input type="radio" value="Twitter"/>
          <label>Twitter</label><br/>
          <input type="radio" value="Friends"/>
          <label>Friends</label><br/>
          <input type="radio" value="Search Engine" />
          <label>Search Engin（google, bing..)</label><br/>
          <input type="radio" value="others"/>
          <label>Others: </label><br/>
          <input type="text" name="others"/><br/>
          <input className={styles.button} type="submit" value="submit your order" />
        </form>
      )
    }
  </div>
  )
}

export default Form;
