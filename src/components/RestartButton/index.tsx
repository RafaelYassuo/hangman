import React from 'react';
import { Restart } from './styled';

interface RestartButtonProps {
  onClick: () => void; // Define que onClick será uma função sem parâmetros e sem retorno
}

const RestartButton: React.FC<RestartButtonProps> = ({ onClick }) => {
  return (
    <Restart>
      <button onClick={onClick}>
        Reiniciar
      </button>
    </Restart>
  );
}

export default RestartButton;
