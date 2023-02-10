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
    <StyledContainer>
      <StyledForm onSubmit={(e) => changeStep(currentStep + 1)}>
        {currentComponent}
        <BackSendIcon color={currentStep === 0 ? 'disabled' : 'action'} onClick={(e) => changeStep(currentStep - 1)} />
        <FowardSendIcon color={currentStep === formComponents.length - 1 ? 'disabled' : 'action'} onClick={(e) => changeStep(currentStep + 1)} />
      </StyledForm>
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

const StyledForm = styled.form`
  width:50%;
  height:90%;
  display:flex;
  flex-direction:column;
  border: 1px solid black;
  align-items:center;
  position: relative;
  padding:2rem;
`
const StyledSendIcon = styled(SendIcon)`
    cursor:pointer;
    font-size:4rem !important;
    position:absolute;
    top:50%;

`
const BackSendIcon = styled(StyledSendIcon)`
  rotate: 180deg;
  transform:translateY(50%);
  left:-55px;
  
`
const FowardSendIcon = styled(StyledSendIcon)`
  right:-55px;
  transform:translateY(-50%);
`
