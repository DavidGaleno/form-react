import { useContext } from "react"
import styled from "styled-components"
import { GlobalContext } from "../../context/globalContext"
interface Props{
    value: any
    setValue: any
}
export const TextArea = ({value,setValue}: Props) => {
    const {dataDefaultValue,setDataDefaultValue,register} = useContext(GlobalContext)
    return (
        <StyledContainer>
            <textarea style={{resize:'none'}} name="" id="" maxLength={600} cols={30} rows={10} {...register("Comments")} placeholder="Tell Us How Was Your Experience"  onChange={(e) => setDataDefaultValue((prev: any) => ({
                ...prev,
                ["Comments"]: {
                    type: 'textarea',
                    value: e.target.value
                }
            }))} ></textarea>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width:100%;
    display:flex;
    flex: 1;
    flex-direction:column;
    gap: 3rem;
`