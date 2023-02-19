import { useContext } from "react";
import styled from "styled-components"
import { GlobalContext } from "../../context/globalContext";
import { icons } from "../icons/icons"
interface Props {
    value: any
    setValue: any
    id: string;
    label: string;
}

export const RadioBox: React.FC<Props> = ({ value, setValue, id, label }: Props) => {
    const { setDataDefaultValue, dataDefaultValue } = useContext(GlobalContext)
    return (
        <StyledLabel className="radio-container">
            <input id={id} type="radio" value="unsatisfied" onClick={(e: any) => setDataDefaultValue((prev: any) => ({
                ...prev,
                [label]: {
                    type: 'radio',
                    value: e.target.id
                }
            }))} name={label} required checked={dataDefaultValue[label] && dataDefaultValue[label].value === id ? true : false} />
            {icons[Number(id)]}
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