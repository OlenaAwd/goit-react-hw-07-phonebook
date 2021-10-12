import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
    const {data} = await axios.get(`/contacts`)
  return data;
}

export async function addContact(contact) {
    const { data } = await axios.get('/contacts', contact);
    return data;
    
//   return axios.post('/contacts', contact);
}

export async function deleteContact(id) {
    const {data}= await axios.delete(`/contacts/${id}`)
    return data;
}