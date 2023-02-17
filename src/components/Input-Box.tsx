import { SetStateAction, useState } from "react";
import styled from "styled-components"

interface Props {
    label: string
    type: string
    value: any
    setValue: any
}

export const InputBox: React.FC<Props> = ({ label, type, value, setValue }: Props) => {
    const validateInput = (e: any) => {
        if (type === 'number') {
            const regex = new RegExp(/[0-9]/)
            e.key !== "Backspace" && !regex.test(e.key) && e.preventDefault()
        }
        else if (type === 'text') {
            const regex = new RegExp("[a-zçâãõô ]", 'i')
            if (value && (value + e.key).includes("  ")) {
                e.preventDefault()
                return
            }
            else !regex.test(e.key) && e.preventDefault()
        }

    }
    return (
        <StyledInput>
            <input type={type} min='1' name="" id={label} defaultValue={value} onKeyDown={(e) => validateInput(e)} onChange={(e) => setValue(e.target.value)} required />
            <label className={value ? "focusedLabel" : "unfocusedLabel"} htmlFor={label}>{label}</label>
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
`
