import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <input type="email" placeholder="E-mail" />

          <input type="password" placeholder="Senha" />

          <button type="button">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="/">
          <FiLogIn />
          Criar conta
        </a>
      </S.Content>

      <S.Background />
    </S.Container>
  );
};

export default SignIn;
