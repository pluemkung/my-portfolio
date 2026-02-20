import React, { createContext, useState, useContext } from 'react';
import th from '../data/th';
import en from '../data/en';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('EN');
  const content = lang === 'TH' ? th : en;
  const toggleLang = () => setLang(prev => (prev === 'TH' ? 'EN' : 'TH'));
  return (
    <LanguageContext.Provider value={{ lang, content, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => useContext(LanguageContext);