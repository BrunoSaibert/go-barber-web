import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...props }) => {
  return (
    <S.Container>
      {Icon && <Icon size={20} />}
      <input {...props} />
    </S.Container>
  );
};

export default Input;
