import { createContext } from 'react';

interface IAppContextType {
  locale: string;
  updateLocalCode: (T: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FOOTER_INTERNAL_PAGE_TYPE = 'internal-footer';
export const FOOTER_LOGIN_PAGE_TYPE = 'login-page__footer';
export const AppContext = createContext({} as IAppContextType);
