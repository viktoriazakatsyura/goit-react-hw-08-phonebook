import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContacts, getQueryFilter } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getQueryFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
