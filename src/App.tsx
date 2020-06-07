import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const src: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Bruno' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
};

export default src;
