import { Button } from "@mui/material"
import styled from "styled-components"

export const Thanks: React.FC = () => {
    return (
        <StyledContainer>
            <StyledButton type="submit">SUBMIT</StyledButton>
            <h3>Here an resume of your answers</h3>
            <p>Resume</p>
            <h4>Submit and get a 10% discount cupom</h4>
        </StyledContainer>
    )
}
const StyledContainer = styled.div`
    width:100%;
    display:flex;   
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap: 3rem;
    
    h3{
        color:gray;
        font-size:2.5rem;
        font-weight:300;
    }
    h4{
        color:gray;
        font-size:2rem;
    }
`
const StyledButton = styled.button`
        background:none;
        border: 0;
        font-size:2rem;
        color:gray;
        transition: .3s;
        cursor:pointer;
        padding:1rem;
        &:hover{
        background-color: rgba(155, 155, 155, 0.104);
    }
`