import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Register
export const register = async credentials => {
  const res = await axios.post('/users/signup', credentials);
  setAuthHeader(res.data.token);
  return res.data;
};

// LogIn
export const login = async credentials => {
  const res = await axios.post('/users/login', credentials);
  setAuthHeader(res.data.token);
  return res.data;
};

// LogOut
export const logOut = async () => {
  await axios.post('/users/logout');
  clearAuthHeader();
};

// Refresh
export const refreshUser = async () => {
  const res = await axios.get('/users/current');
  return res.data;
};

//Get all contacts
export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};
// Delete contact
export const deleteContacts = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
// Add contact
export const postContacts = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

// Change contact
export const changeContact = async value => {
  const contact = {
    name: value.name,
    number: value.number,
  };
  const { data } = await axios.patch(`/contacts/${value.id}`, contact);
  return data;
};
