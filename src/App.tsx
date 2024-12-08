import React, { useState } from 'react';
import CustomForms from './components/CustomForms';
import { MainContainer } from './app.styled';
import start from './assets/1.png';
import one from './assets/2.png';
import two from './assets/3.png';
import tree from './assets/4.png';
import four from './assets/5.png';
import five from './assets/6.png';
import six from './assets/7.png';
import end from './assets/0.png';
import RestartButton from './components/RestartButton';

interface Message {
  text: string;
  type: 'success' | 'error' | 'info';
}

var death = 0
var win = false

function App() {
  const mainLetter = "Hello World";
  const imgForca = [start, one, two, tree, four, five, six, end]
  const initialState =  mainLetter.split('').map(char => (char === ' ' ? ' ' : '_'))

  const [renderLetter, setRenderLetter] = useState<string[]>(initialState);
  const [usedLetters, setUsedLetters] = useState<string[]>([])
  const [message, setMessage] = useState<Message | undefined>(undefined); 
  const [mistake, setMistake] = useState(imgForca[death])

  function LetterGuess(letter: string) {
    const updatedLetters = [...renderLetter];
    var wrong = true;

    if(usedLetters.includes(letter)){ // caso a letra seja repetida não faz nada
      setMessage({text: `A letra ${letter.toUpperCase()} já foi utilizada`,type: 'info'})
      return
    }

    if(death < 7 && updatedLetters.join('') !== mainLetter){
      mainLetter.split('').forEach((char, index) => {  // Looping para verificar se a letra está correta ou errada

      if (char.toLowerCase() === letter.toLowerCase()) {
        setMessage({text: `Parabéns, você acertou a letra: ${letter.toUpperCase()}`,type: 'success'})
          
        updatedLetters[index] = char;
        wrong = false
      }
      });

      if (wrong) {
        setMessage({text: `A letra ${letter.toUpperCase()} não está na palavra`, type: 'error'})
        
        console.log("errou")
        death += 1
        setMistake(imgForca[death])
      }

      setUsedLetters(prev => ([...prev, letter])); // Adiciona a letra na array
      
      // console.log("usedLetters",usedLetters)
      setRenderLetter(updatedLetters); // Renderiza as letras corretas
    }

    if (updatedLetters.join('') === mainLetter) {
      setMessage({ text: "Você ganhou, parabéns!", type: 'success' });
      win = true
      // return
    }
  };

  function restartGame () {
    console.log("PASSSOU")
    death = 0
    win = false
    setRenderLetter(initialState)
    setMessage(undefined)
    setUsedLetters([])
    setMistake(imgForca[death])
  }

  return (
    <MainContainer type={message?.type}>
      <div className='Forca'>
        <div className='ImgContainer'>
          <img className='img' src={mistake} alt="Forca" />
        </div>

        <div className='LettersContainer'>
          {renderLetter.map((item, index) => {
            return <h1 className='Letters' key={index}>{item}</h1>;
          })}
          {/* <h1 className='Letters'>?</h1>; */}
        </div>
      </div>

      <div className='centralizer'>
        <CustomForms handleLetterGuess={LetterGuess} />
        
        {message && (
          <>
            <p className='gameover'>{message.text}</p>
            {(death === 7 || win) && <RestartButton onClick={() =>restartGame()} />}
          </>
        )}
      </div>
    </MainContainer>
  );
}

export default App;
