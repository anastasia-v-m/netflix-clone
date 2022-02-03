import instance from './axios';

const endpoints = {
  registration: (data: any) => instance.post('/v1/auth/email/register', data),
  login: (data: any) => instance.post('/v1/auth/email/login', data),
  getProfile: () => instance.get('/v1/auth/me'),
};

export default endpoints;
