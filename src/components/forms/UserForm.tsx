import styled from "styled-components"
import { InputBox } from "../Inputs/Input-Box"

export const UserForm: React.FC = () => {
    return (
        <StyledContainer>
            <InputBox type="text" label="Name" />
            <InputBox type="number" label="Age" />
            <InputBox type="email" label="Email" />
                

        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width:100%;
    padding:1rem;   
    overflow-y:auto;
    display:flex;   
    flex-direction:column;
    gap: 3rem;
    @media screen and (max-height: 564px){
      height:100vh;
  }
`