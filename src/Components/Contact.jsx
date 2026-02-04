import "./Contact.css";
import Title from "./Title";

const Contact = () => {
  return (
    <div id="contact">
      <Title title="Contact Us" subTitle="Get in Touch" />
      <div className="contact-container">
        <div className="contact-left">
          <h2>Send us a message</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            fugiat officia nam magnam neque qui maxime itaque suscipit
            laboriosam incidunt!
          </p>
          <p>✉️ contact@gmail.com</p>
          <p>📞 +91 9856956895</p>
          <p>
            📍 Flat No. 12B, Green View Apartments MG Road, Near City Mall
            Bengaluru – 560001 Karnataka India
          </p>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
