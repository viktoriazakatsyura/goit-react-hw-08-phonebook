import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactList__item} key={id}>
      {name}: {number}
      <Button variant="contained" onClick={handleDelete}>
        <DeleteIcon />
      </Button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};