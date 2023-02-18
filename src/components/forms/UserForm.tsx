import { useContext } from "react"
import styled from "styled-components"
import { GlobalContext } from "../../context/globalContext"
import { InputBox } from "../Inputs/Input-Box"
import { StyledForm } from "./StyledForm"

export const UserForm: React.FC = () => {
    const {name,setName,age,setAge,email,setEmail} = useContext(GlobalContext)
    return (
        <StyledContainer>
            <InputBox type="text" label="Name" value={name} setValue={setName} />
            <InputBox type="number" label="Age" value={age} setValue={setAge}  />
            <InputBox type="email" label="Email" value={email} setValue={setEmail}  />
                

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