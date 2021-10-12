import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './FilterForm/FilterForm';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { getContacts } from '../redux/contacts/contacts-selectors';


export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster position="top-right" />
    </Container>
  );
}

