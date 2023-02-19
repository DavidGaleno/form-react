import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

import { Steps } from './components/header/Steps';
import { FormEvent, useContext } from 'react';
import { GlobalContext } from './context/globalContext';
export const App: React.FC = () => {
  const { currentStep, changeStep, currentComponent, steps, handleSubmit } = useContext(GlobalContext)
  const submit = (data : any) => {
    console.log(data)
    if (currentStep < 2) {
      changeStep(currentStep + 1, false)
      return
    }
    window.alert("Formulário enviado com sucesso!")
    changeStep(currentStep - 2, true)

  }
  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <Steps currentStep={currentStep} />
        {currentComponent}
        <BackSendIcon color={currentStep === 0 ? 'disabled' : 'action'} onClick={(e) => changeStep(currentStep - 1, false, e)} />
        <button type="submit" onClick={(e) => currentStep === 2 && e.preventDefault()}><FowardSendIcon color={currentStep === steps.length - 1 ? 'disabled' : 'action'} /></button>
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
  @media screen and (max-height: 564px){
    height:100%;
  }

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
  box-shadow: rgba(100,100,111,.2) 0px 7px 29px 0px;
  button{
    border: 0
  }
  @media screen and (max-width: 800px){
    width:70%;
  }
  @media screen and (max-width: 570px){
    width:90%;
  }
  @media screen and (max-width: 570px){
    width:100%;
    height:100%;
  }
  @media screen and (max-height: 564px){
    height:100%;
    width:100%;
  }
`
const StyledSendIcon = styled(SendIcon)`
    cursor:pointer;
    font-size:4rem !important;
    position:absolute;
    top:50%;
    @media screen and (max-width: 570px){
      top: 45px;
  }
    @media screen and (max-height: 564px){
      top: 45px;
  }
`

const BackSendIcon = styled(StyledSendIcon)`
  rotate: 180deg;
  transform:translateY(50%);
  left:-55px;
  @media screen and (max-width: 570px){
    left: 20px;
  }
  @media screen and (max-height: 564px){
    left: 20px;

  }
  
`
const FowardSendIcon = styled(StyledSendIcon)`
  right:-55px;
  transform:translateY(-50%);
  @media screen and (max-width: 570px){
    right: 20px;
  }
  @media screen and (max-height: 564px){
    right: 20px;

  }
`
