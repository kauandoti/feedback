import { CardConteiner, IconContainer, ButtonContainer, ResultContainer } from "./Home.styles";
import iconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"
import { useState } from "react";
import styled from "styled-components";


export function Home() {
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [feedbackNote, setFeedbackNote] = useState(0);
  const [selectedFeedback, setSelectedFeedback] = useState(null); 

  function handleFeedBackButtonClick(event) {
    const feedback = parseInt(event.target.innerText, 10);
    setFeedbackNote(feedback);
    setSelectedFeedback(feedback); 
  }

  function handleSubmit() {
    if (feedbackNote !== 0) {
      setMostrarResultado(true);
    }
  }

  return (
    mostrarResultado === false ? (
      <CardConteiner>
        <IconContainer>
          <img src={iconStarImg} alt="icone de estrela" />
        </IconContainer>

        <h1>Como foi o atendimento?</h1>
        <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

        <ButtonContainer>
          <button onClick={handleFeedBackButtonClick} className={selectedFeedback === 1 ? 'selected' : ''}>1</button>
          <button onClick={handleFeedBackButtonClick} className={selectedFeedback === 2 ? 'selected' : ''}>2</button>
          <button onClick={handleFeedBackButtonClick} className={selectedFeedback === 3 ? 'selected' : ''}>3</button>
          <button onClick={handleFeedBackButtonClick} className={selectedFeedback === 4 ? 'selected' : ''}>4</button>
          <button onClick={handleFeedBackButtonClick} className={selectedFeedback === 5 ? 'selected' : ''}>5</button>
        </ButtonContainer>
        <button onClick={handleSubmit}>Enviar</button>
      </CardConteiner>
    ) : (
      <CardConteiner>
        <img src={thankYouImg} alt="imagem de agradecimento" />
        <ResultContainer>
          <p>Você selecionou {feedbackNote} de 5</p>
        </ResultContainer>

        <h1>Obrigado</h1>

        <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
      </CardConteiner>
    )
  )
}
