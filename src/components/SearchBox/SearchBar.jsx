import { useId } from 'react';
import css from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = e => dispatch(changeFilter(e.target.value));
  const filter = useSelector(state => state.filter.value); // Assuming filter is stored as an object with a 'value' property
  const id = useId();

  return (
    <div className={css.search}>
      <label className={css.text} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={id}
        value={filter} // Make sure filter is a string
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
