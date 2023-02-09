import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import Send from '@mui/icons-material/Send';
import { UserForm } from './components/UserForm';
import { ReviewForm } from './components/ReviewForm';
import { Thanks } from './components/Thanks';
import { useForm } from './hook/useForm';
import { InputBox } from './components/Input-Box';
export const App: React.FC = () => {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />]
  const { currentStep, currentComponent, changeStep } = useForm(formComponents)
  return (
    <StyledContainer className='container'>
      <div className="header">
        <h1>Deixe sua avaliação</h1>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <StyledFormContainer className="form-container">
        <form action="" onSubmit={(e) => changeStep(currentStep + 1, e)}>
          {currentComponent}

          <div className="input-container">
            <InputBox />
          </div>
          <BackSendIcon color={currentStep == 0 ? 'disabled' : 'action'} onClick={(e) => changeStep(currentStep - 1)} />
          <StyledSubmitButton type='submit'><SendIcon fontSize='large' color={currentStep == formComponents.length - 1 ? 'disabled' : 'action'} /></StyledSubmitButton>
        </form>
      </StyledFormContainer>
    </StyledContainer>
  )
}

export default App

const StyledContainer = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const StyledFormContainer = styled.div`
  width:50%;
  height:90%;
  display:flex;
  justify-content:center;
  align-items:center;
`

const BackSendIcon = styled(SendIcon)`
  rotate: 180deg;
`
const StyledSubmitButton = styled.button`
  background-color: transparent ;
  border: 0;
  color: none;
`
