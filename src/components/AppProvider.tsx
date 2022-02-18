/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { createContext, ReactElement, useState } from 'react';

interface IAppContextType {
  locale: string;
  updateLocalCode: (T: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface IAppProvider {
  children: ReactElement;
}

export const AppContext = createContext({} as IAppContextType);

const LANG_EN = 'en';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function AppProvider(props: IAppProvider) {
  const [locale, setLocale] = useState(LANG_EN);

  const { children } = props;

  function updateLocalCode(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value;
    setLocale(newLocale);
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AppContext.Provider value={{ locale, updateLocalCode }}>{children}</AppContext.Provider>;
}

export default AppProvider;
