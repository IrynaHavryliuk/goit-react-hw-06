import { useId } from 'react';
import css from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = e => dispatch(filterName(e.target.value));
  const value = useSelector(state => state.filter);
  const id = useId();

  return (
    <div className={css.search}>
      <label className={css.text} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;