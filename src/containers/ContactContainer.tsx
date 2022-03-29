import { Contact } from "../App";

import { ContactCard } from "../components/ContactCard";

interface Props {
  contacts: Contact[];
  handleDeleteContact: (id: string) => void;
}

export const ContactContainer = (props: Props) => {
  const { contacts, handleDeleteContact } = props;

  return (
    <section>
      {contacts.map((contact: Contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </section>
  );
};
