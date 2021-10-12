import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '/redux/contacts';
import Loader from '/Loader/Loader';
import css from './ContactForm.module.css';
import { toast } from 'react-hot-toast';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  
  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(con => con.name.toLowerCase() === name.toLowerCase())) {
      toast(`'${name}' is already in contacts`);
      return;
    }

    if (contacts.find(con => con.number === number)) {
      toast(`'${number}' is already in contacts`);
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor={nameId.current}>
          Name
          <input
            className={css.inputName}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder=" John Smith"
          />
        </label>
        <label className={css.label} htmlFor={numberId.current}>
          Number
          <input
            className={css.inputNumber}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder=" 111-11-11"
          />
        </label>
        {!isLoading && (
          <button className={css.button} type="submit">
            Add contact
          </button>
        )}
        {isLoading && <LoaderComponent />}
      </form>
    </>
  );
}
