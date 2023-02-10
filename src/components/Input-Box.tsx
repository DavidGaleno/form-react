import styled from "styled-components"

interface Props {
    label: string;
}

export const InputBox: React.FC<Props> = ({ label }: Props) => {
    return (
        <StyledInput>
            <input type="text" name="" id="name" />
            <label htmlFor="name">{label}</label>
        </StyledInput>
    )
}


const StyledInput = styled.div`
    width: 100%;
    height:4rem;
    position:relative;
    input{
        width:100%;
        height:100%;
        border:0;
        font-size:1.5rem;
        border-bottom: 1px solid black;
        font-weight: 300;

    }
    input:focus{
        outline:none;
    }
    input:focus ~ label{
        font-size:1rem;
        top:0;
        left:-5px;
        background-color:white;
        padding:.4rem;
    }
    label{
        transition: .2s;
        position:absolute;
        left:2%;
        font-size:1.8rem;
        top:50%;
        transform:translateY(-50%);
    }
`
