import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
      <img src={logo} alt="Logo" style={{ height: '40px' }} />
      <h1>{t('Centime Financial Overview')}</h1>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('hi')}>Hindi</button>
      </div>
    </header>
  );
};

export default Header;