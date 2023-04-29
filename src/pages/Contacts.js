import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { Loader } from '../components/Loader/Loader';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { getIsLoading, getError } from '../redux/contacts/selectors';
import Typography from '@mui/material/Typography';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h3" gutterBottom align="center" marginTop="40px" color="limegreen">
        PHONE BOOK
      </Typography>
      <ContactForm />
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </>
  );
}