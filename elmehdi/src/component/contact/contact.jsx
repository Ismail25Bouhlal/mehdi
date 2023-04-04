import React from "react";
import "./contact.css";

function contact() {
  return (
    <section>
      <div className="title">
        <h1>Contact Me</h1>
      </div>
      <form className="Contacte">
          <p>Name<input type="text" name='name' required/></p>
          <p>Email Adress<input type="email" name='email' required/></p>
          <p>Your Message<textarea name="message" rows="7" required></textarea></p>
          <button type="submit" className='button'>Submit</button>
        </form>
    </section>
  );
}

export default contact;
