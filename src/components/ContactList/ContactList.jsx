import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const visibleContacts = contacts.filter(contact => {
    if (filter && typeof filter === 'string') {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    }
    return true; // Показує всі контакти, якщо фільтр не заданий або не є рядком
  });

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} onDelete={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
