import instance from './endpoint';

export const registration = (data: any) => instance.post('/v1/auth/email/register', data);
export const login = (data: any) => instance.post('/v1/auth/email/login', data);
export const getProfile = () => instance.get('/v1/auth/me');
