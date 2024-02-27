import React, { useState } from "react";
import styles from "./contact.module.css";
import Button from "../Button/Button";
import { MdEmail } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
function ContactForm() {

  const [name, setName] = useState("DefaultValue");
  const [email, setEmail] = useState("defaulemail@gmail.com")
  const [text, setText] = useState("Write some text here")

  const onSubmit = (event) =>{
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button 
          text="VIA CALL" 
          icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea  name="text" rows="8"/>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end"
          }}>
          <Button
          text="SUBMIT" />
          </div>
      <div>{name + " " + email + " " + text}</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="contact image" />
      </div>
    </section>
  );
}

export default ContactForm;
