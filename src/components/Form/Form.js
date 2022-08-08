import React from "react";
import classes from "./Form.module.css";

export default function Form() {
  return (
    <div className={classes.form_container}>
      <h2>Contact us</h2>
      <form>
        <label htmlFor="cars">Please select a reason to contact:</label>
         <select id='cars'>
          <option value="add-detail">I want to add my place detail</option>
          <option value="update-detail">I want to update my place detail</option>
          <option value="remove-detail">I want to remove my place detail</option>
          <option value="wrong-detail">My place detail are wrong...!</option>
          <option value="other-detail">other</option>
         </select>
         <label htmlFor="name">Name</label>
         <input type="text" id="name" name="name"></input>
         <label htmlFor="email">Email</label>
         <input type='email' id='email' name='email'></input>
         <label htmlFor="number">Phone</label>
         <input type='number' id='number' name='number'></input>
         <label htmlFor="subject">Subject</label>
         <input type='text' id='subject' name='subject'></input>
         <button type='submit' className={classes.btn}>Submit</button>
      </form>
    </div>
  );
}
