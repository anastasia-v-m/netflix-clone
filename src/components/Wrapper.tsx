import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import dataTranslate from '../i18n/dataTranslate';

interface ContextState {
  locale: string;
  selectLanguage: (T: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface IProps {
  children: JSX.Element;
}

export const Context = React.createContext({} as ContextState);

const local = navigator.language;
console.log(local);
let lang: any;
if (local === 'en-EN') {
  lang = dataTranslate.en;
} else {
  lang = dataTranslate.ru;
}

const Wrapper = (props: IProps) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e: React.ChangeEvent<HTMLSelectElement>): void {
    const newLocale = e.target.value;
    console.log(newLocale);
    setLocale(newLocale);
    if (newLocale === 'en-EN') {
      setMessages(dataTranslate.en);
    } else {
      setMessages(dataTranslate.ru);
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
