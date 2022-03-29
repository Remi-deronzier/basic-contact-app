import { useState } from "react";

import { nanoid } from "nanoid";

import styles from "./App.module.css";

import { ContactContainer } from "./containers/ContactContainer";
import { FormContainer } from "./containers/FormContainer";

export interface Contact {
  id: string;
  name: string;
  email?: string;
}

const initialContacts: Contact[] = [
  {
    id: nanoid(),
    name: "Alice",
  },
  {
    id: nanoid(),
    name: "Bob",
    email: "bob@gmail.com",
  },
  {
    id: nanoid(),
    name: "Paul",
    email: "paul@gmail.com",
  },
];

function App() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contacts, setContacts] = useState(initialContacts);

  const handleAddOneContact = (event: any): void => {
    event.preventDefault();
    if (contactName.length !== 0) {
      const newContact: Contact = {
        id: nanoid(),
        name: contactName,
        email: contactEmail,
      };
      setContacts([...contacts, newContact]);
      setContactEmail("");
      setContactName("");
    }
  };

  const handleDeleteContact = (id: string): void => {
    const contactIndex = contacts.findIndex((contact) => contact.id === id);
    setContacts([
      ...contacts.slice(0, contactIndex),
      ...contacts.slice(contactIndex + 1),
    ]);
  };

  const handleChangeContactName = (event: any) =>
    setContactName(event.target.value);

  const handleChangeContactEmail = (event: any) =>
    setContactEmail(event.target.value);

  return (
    <div className={styles.app_wrapper}>
      <main className={styles.app_content}>
        <h1>Contacts</h1>
        <ContactContainer
          contacts={contacts}
          handleDeleteContact={handleDeleteContact}
        />
        <FormContainer
          contactEmail={contactEmail}
          contactName={contactName}
          handleAddOneContact={handleAddOneContact}
          handleChangeContactEmail={handleChangeContactEmail}
          handleChangeContactName={handleChangeContactName}
        />
      </main>
    </div>
  );
}

export default App;
