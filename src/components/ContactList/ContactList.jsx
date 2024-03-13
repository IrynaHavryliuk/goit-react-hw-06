import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts, deleteContact } from '../../redux/contactsSlice'; // Import deleteContact

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    // Dispatch the deleteContact action with the contact id
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={handleDeleteContact} // Pass the handleDeleteContact function
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
