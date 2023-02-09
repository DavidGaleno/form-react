import styled from "styled-components"

export const InputBox: React.FC = () => {
    return (
        <div className="input-box">
            <StyledInput>
                <label htmlFor="name">Name</label>
                <input type="text" name="" id="name" />
            </StyledInput>
        </div>
    )
}

const StyledInput = styled.div`
    border: 1px solid black;
    position:relative;
    label{
        position:absolute;
        left:50%;
        top:0;
    }
`
