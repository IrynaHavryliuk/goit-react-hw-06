import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'; // Assuming this is the correct path

import { FaUser, FaPhone, FaTrash } from 'react-icons/fa';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Dispatch the deleteContact action with the contact id
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <div>
        <div>
          <FaUser />
          <span>{name}</span>
        </div>
        <div>
          <FaPhone />
          <span>{number}</span>
        </div>
      </div>
      <button onClick={handleDelete}>
        <FaTrash /> Delete
      </button>
    </li>
  );
};

export default Contact;
