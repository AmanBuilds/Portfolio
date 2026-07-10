import styles from "./Contact.module.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Get In Touch</span>

          <h2>
            Let's Build Something
            <span> Great Together.</span>
          </h2>

          <p>
            Whether you have an opportunity, a project idea, or just want to
            connect, I'd love to hear from you. Let's create something amazing.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <ContactInfo />
          </div>

          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;