import { useState } from 'react';
import styles from './footer.module.scss';
export default function Contact_Form() {
  return (
    <section className={styles.footer__content__contact}> 
      <p>
        Contact Me
      </p>
      <form 
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      // data-netlify-recaptcha="true"
      className={styles.footer__content__contact__form}
      >
          <input type="hidden" name="bot-field"/>
          <div className={styles.footer__content__contact__form__senderDiv}>
            <label className={styles.footer__content__contact__form__label} htmlFor="name">Name:</label>
            <input
              className={styles.footer__content__contact__form__input}
              required
              id="name"
              type="text"
            /> 
            <label className={styles.footer__content__contact__form__label}htmlFor="email">Email:</label>
            <input
                className={styles.footer__content__contact__form__input}
                required
                id="email"
                type="email"
            />
          </div>
          <div className={styles.footer__content__contact__form__textAreaDiv}>
            <label className={styles.footer__content__contact__form__label} htmlFor="message">Message:</label>
            <textarea className={styles.footer__content__contact__form__textArea}
              required
              id="message"
              type="text"
              rows="6"
            />      
            <button className= {styles.footer__content__contact__form__button} type="submit">Send
            </button>                      
          </div>
      </form>
    </section>
  );
}