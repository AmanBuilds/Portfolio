import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { FiBriefcase, FiClock } from "react-icons/fi";

import ContactItem from "./ContactItem";
import styles from "./Contact.module.css";
import SocialLinks from "./SocialLinks";
import contact from "../../data/contact";

const ContactInfo = () => {
  return (
    <div className={styles.infoWrapper}>
      <h3>Let's Talk.</h3>

      <p className={styles.infoDescription}>
        I'm currently looking for Frontend Developer opportunities. If you have
        a role, collaboration, or project in mind, feel free to reach out.
      </p>

      <div className={styles.infoList}>
        <ContactItem
          icon={<HiOutlineEnvelope />}
          title="Email"
          value={contact.email}
        />

        <ContactItem
          icon={<HiOutlineMapPin />}
          title="Location"
          value={contact.location}
        />

        <ContactItem
          icon={<FiBriefcase />}
          title="Availability"
          value={contact.availability}
        />

        <ContactItem
          icon={<FiClock />}
          title="Response"
          value={contact.responseTime}
        />
      </div>
      <SocialLinks />
    </div>
    
  );
};

export default ContactInfo;