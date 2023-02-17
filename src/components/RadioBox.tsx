import styled from "styled-components"

interface Props{
    value: any
    setValue: any
    icon: JSX.Element
    id: string;
    label:string;
}

export const RadioBox : React.FC<Props> = ( {value,setValue,icon,id,label} : Props) => {
    const sla = (e : any)=> {
        setValue(e.target.id)
    }
    return (
        <StyledLabel className="radio-container">
            <input id={id} type="radio" value="unsatisfied" onClick={(e)=>sla(e)} name={label} required checked={value === id ? true : false} />
            {icon}
        </StyledLabel>
    )
}

const StyledLabel = styled.label`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:.5rem;
    position: relative;
    .icon{
        font-size:3rem;
        cursor: pointer;
    }
    input{
        opacity:0;
        position:absolute;
        top:15px;
        cursor: pointer;
    }
    input:checked ~ .icon{
        color:#7076f4;
    }
`