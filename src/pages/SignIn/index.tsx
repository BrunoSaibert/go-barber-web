import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input type="email" name="email" placeholder="E-mail" icon={FiMail} />

          <Input
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="button">Entrar</Button>

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
