import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";
import Instagram from "../../assets/instagram.png";

function Contact() {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My clients</h1>
        <p className="clientDesc">
          Labore dolore quis officia in ut mollit duis sint ut dolore eu eu.
          Lorem magna Lorem dolor incididunt pariatur laboris nostrud ullamco
          culpa culpa irure.
        </p>
      </div>
      <div className="clientImgs">
        <img src={Walmart} alt="Client" className="clientImg" />
        <img src={Adobe} alt="Client" className="clientImg" />
        <img src={Microsoft} alt="Client" className="clientImg" />
        <img src={Facebook} alt="Client" className="clientImg" />
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          {" "}
          Cillum mollit consectetur culpa eu excepteur nisi dolor labore
          occaecat officia irure reprehenderit enim.{" "}
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            className="msg"
          ></textarea>
          <button type="submit" value={"send"} className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="FacebookIcon" className="link" />
            <img src={Twitter} alt="Twitter" className="link" />
            <img src={Youtube} alt="Youtube" className="link" />
            <img src={Instagram} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
