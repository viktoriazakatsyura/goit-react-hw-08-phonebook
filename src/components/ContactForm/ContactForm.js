import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { nanoid } from 'nanoid';
import { useNotify } from '../../hooks/useNotify';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ContactFormWrapper = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '300px',
  margin: '0 auto',
});

const ContactFormInput = styled(TextField)({
  marginBottom: '15px',
  width: '100%',
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const { showFailure } = useNotify();

  const addNewContact = (name, number) => {
    const condition = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (condition) {
      return showFailure(`${name} is already in contacts!`);
    }
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    addNewContact(form.elements.name.value, form.elements.number.value);
    form.reset();
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <ContactFormInput
        type="text"
          name="name"
          placeholder="Enter name"
          id='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
      />
      <ContactFormInput
        type="tel"
          name="number"
          placeholder="Enter number"
          label='number'
          id='number'
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
      />
      <Button variant="contained" type="submit">
        Add contact
      </Button>
    </ContactFormWrapper>
  );
};






     


