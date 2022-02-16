import React, { createContext, ReactElement, useState } from 'react';

interface IAppContextType {
  locale: string;
  updateLocalCode: (T: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface IAppProvider {
  children: ReactElement;
}

export const AppContext = createContext<IAppContextType>({} as IAppContextType);

function AppProvider(props: IAppProvider) {
  const LANG_EN = 'en';
  const [locale, setLocale] = useState(LANG_EN);
  function updateLocalCode(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value;
    setLocale(newLocale);
  }
  return <AppContext.Provider value={{ locale, updateLocalCode }}>{props.children}</AppContext.Provider>;
}

export default AppProvider;
