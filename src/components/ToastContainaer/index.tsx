import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import * as S from './styles';

const ToastContainaer: React.FC = () => {
  return (
    <S.Container>
      <S.Toast>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu algo</strong>
          <p>Tente novamente mais tarde</p>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </S.Toast>

      <S.Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Sucesso</strong>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </S.Toast>

      <S.Toast type="error">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possivel realizar o login</p>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </S.Toast>
    </S.Container>
  );
};

export default ToastContainaer;
