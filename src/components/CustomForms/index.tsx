import React, { useState } from 'react';
import { InputWrapper, ButtonWrapper } from './styled';

const CustomForms = ({ handleLetterGuess }: { handleLetterGuess: (letter: string) => void }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^A-Za-z]/g, '')
    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      handleLetterGuess(inputValue); // Envia a letra para a função handleLetterGuess
      setInputValue(''); // Limpa o campo de entrada após a tentativa
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: "center", margin: '0 auto'}}>
    <InputWrapper>
      <div className="brutalist-container">
        <input placeholder="Press ENTER" value={inputValue} className="brutalist-input smooth-type" type="text" maxLength={1} onChange={handleChange}/>
        <label className="brutalist-label">Digite uma letra 👇</label>
      </div>
    </InputWrapper>
    <ButtonWrapper>
    <button className="btn-class-name">
        <span className="back" />
        <span className="front" />
      </button>
    </ButtonWrapper>
    </form>
  );
}

export default CustomForms;