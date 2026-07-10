import styles from "./Contact.module.css";

const ContactItem = ({ icon, title, value }) => {
  return (
    <div className={styles.contactItem}>
      <div className={styles.iconWrapper}>{icon}</div>

      <div className={styles.contactText}>
        <span>{title}</span>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ContactItem;