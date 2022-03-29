import type { Contact } from "../App";

import styles from "./ContactCard.module.css";

interface Props {
  contact: Contact;
  handleDeleteContact: (id: string) => void;
}

export const ContactCard = (props: Props) => {
  const { contact, handleDeleteContact } = props;
  return (
    <div className={styles.contact_card_info}>
      <div>
        <h2>{contact.name}</h2>
        {contact.email && (
          <p className={styles.contact_card_email}>{contact.email}</p>
        )}
      </div>
      <button
        className={styles.contact_card_remove_button}
        onClick={() => handleDeleteContact(contact.id)}
      >
        DELETE
      </button>
    </div>
  );
};
