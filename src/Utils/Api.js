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

//
export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const postContacts = async contact => {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
};
