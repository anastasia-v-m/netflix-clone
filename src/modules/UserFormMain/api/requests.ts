import instance from './endpoint';

import { IRegData, ILoginData } from '../types';

export const registration = (data: IRegData): Promise<any> => instance.post('/v1/auth/email/register', data);
export const login = (data: ILoginData): Promise<any> => instance.post('/v1/auth/email/login', data);
export const getProfile = () => instance.get('/v1/auth/me');
