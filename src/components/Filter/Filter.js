import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/sliceFilter';
import { TextField } from '@mui/material';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <div className={css.filter}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="filter"
        type="text"
        name="name"
        label="Find contact by name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        autoComplete="name"
        onChange={handleChangeFilter}
        sx={{ width: '400px' }}
      />
    </div>
  );
};


