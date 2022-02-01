import axios from 'axios';

export default axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0d0d1bfe-6165-47ff-b6fc-5c10450ec8e5',
  },
});
