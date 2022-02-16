import React, { createContext, useState } from 'react';

interface IAppContextType {
  locale: any;
  updateLocalCode: (T: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const AppContext = createContext<IAppContextType>({} as IAppContextType);

function AppProvider(props: any) {
  const [locale, setLocale] = useState('en');
  function updateLocalCode(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value;
    setLocale(newLocale);
  }
  return <AppContext.Provider value={{ locale, updateLocalCode }}>{props.children}</AppContext.Provider>;
}

export default AppProvider;
