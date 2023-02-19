import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import { GlobalContext } from "../../context/globalContext";
interface Props {
    label: string
    type: string
}

export const InputBox: React.FC<Props> = ({ label, type }: Props) => {
    const [validate, setValidate] = useState(true)
    const { register, dataDefaultValue, setDataDefaultValue } = useContext(GlobalContext)

    useEffect(() => {
        if (dataDefaultValue[label]) {
            if (type === 'email') {
                const regex = new RegExp(/^\w+@\w+\.(\w{2,3}|\w{2,3}\.\w{2})$/, 'i')

                if (regex.test(dataDefaultValue[label].value)) {
                    setValidate(true)
                }
                else {
                    setValidate(false)
                }
            }
        }
    }, [dataDefaultValue])
    useEffect(() => {
        console.log(dataDefaultValue)
    }, [dataDefaultValue])

    const validateUserInput = (e: any) => {
        if (type === 'number') {

            const regex = dataDefaultValue[label] ? new RegExp(/[0-9]/) : new RegExp(/[1-9]/)
            e.key !== "Backspace" && !regex.test(e.key) && e.preventDefault()
        }
        else if (type === 'text') {
            const regex = new RegExp("[a-zçâãõôáéóúàèòùìí ]", 'i')
            if (dataDefaultValue[label] && (dataDefaultValue[label].value + e.key).includes("  ")) e.preventDefault()
            else !regex.test(e.key) && e.preventDefault()
        }
        else if (type === "email") {
            if (e.key == " ") e.preventDefault()

        }

    }
    return (
        <StyledInput>
            <input type={type} min='1' name="" id={label} onKeyDown={(e) => validateUserInput(e)} {...register(label)} onChange={(e) => setDataDefaultValue((prev: any) => ({
                ...prev,
                [label]: {
                    type,
                    value: e.target.value
                }
            }))} required />{dataDefaultValue[label] ? validate ? <CheckCircleOutlineIcon color="success" className="checkSymbol" /> : <DangerousOutlinedIcon className="checkSymbol" color="error" /> : ''}
            <label className={dataDefaultValue[label] ? "focusedLabel" : "unfocusedLabel"} htmlFor={label}>{label}</label>

        </StyledInput>
    )
}


const StyledInput = styled.div`
    width: 100%;
    min-height:4rem;
    position:relative;
    input{
        width:100%;
        height:100%;
        border:0;
        padding-left:1rem;
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
        position:absolute;
        transition: .2s;
        transform:translateY(-50%);
    }
    .focusedLabel{
        font-size:1rem;
        top:0px;
        left:-5px;
        background-color:white;
        padding:.4rem;
    }
    .unfocusedLabel{
        transition: .2s;
        left:2%;
        font-size:1.8rem;
        top:50%;
    }
    .checkSymbol{
        position:absolute;
        top:50%;
        right:20px;
        transform:translateY(-50%);
    }
`
