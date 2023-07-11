import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';

const getVisibleContacts = (contacts, filteredContacts) => {
  if (filteredContacts === '') {
    return contacts;
  } else {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filteredContacts.filter) ?? []
    );
  }
};

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filteredContacts = useSelector(state => state.filters);
  const visibleContacts = getVisibleContacts(contacts, filteredContacts);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.listEl}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
