import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice'; // Assuming you have a filters slice

import styles from './SearchBox.module.css';

function SearchBox() {
  const searchTerm = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    // Dispatch the changeFilter action with the new search term
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        placeholder="Find contacts..."
        value={searchTerm}
        onChange={handleSearchChange} // Use the handleSearchChange function
        className={styles.input}
      />
    </div>
  );
}

export default SearchBox;
