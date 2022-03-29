import styles from "./FormContainer.module.css";

interface Props {
  handleAddOneContact: (event: any) => void;
  contactName: string;
  contactEmail: string;
  handleChangeContactEmail: (event: any) => void;
  handleChangeContactName: (event: any) => void;
}

export const FormContainer = (props: Props) => {
  const {
    handleAddOneContact,
    handleChangeContactName,
    handleChangeContactEmail,
    contactName,
    contactEmail,
  } = props;

  return (
    <form
      onSubmit={handleAddOneContact}
      className={styles.form_container_wrapper}
    >
      <input
        name="name"
        id="name"
        placeholder="name"
        value={contactName}
        required
        onChange={handleChangeContactName}
      />
      <input
        name="email"
        id="email"
        placeholder="email"
        value={contactEmail}
        onChange={handleChangeContactEmail}
      />
      <button className={styles.form_container_add_button} type="submit">
        ADD
      </button>
    </form>
  );
};
