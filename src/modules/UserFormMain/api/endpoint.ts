import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nestjs-boilerplate-test.herokuapp.com/api',
});

export default instance;
