import styled from "styled-components"
import { InputBox } from "./Input-Box"
import { StyledForm } from "./StyledForm"

export const UserForm: React.FC = () => {
    return (
        <StyledContainer>
            <InputBox label="Name" />
            <InputBox label="Age" />
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap: 3rem;
`