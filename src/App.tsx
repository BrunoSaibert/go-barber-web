import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import ToastContainaer from './components/ToastContainaer';
import { AuthProvider } from './hooks/AuthContext';

const src: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContainaer />
      <GlobalStyle />
    </>
  );
};

export default src;
