/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement, useState } from 'react';

import { AppContext } from './constants';

interface IAppProvider {
  children: ReactElement;
}

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
