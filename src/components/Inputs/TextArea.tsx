import styled from "styled-components"
interface Props{
    value: any
    setValue: any
}
export const TextArea = ({value,setValue}: Props) => {
    return (
        <StyledContainer>
            <textarea style={{resize:'none'}} name="" id="" maxLength={600} cols={30} rows={10} placeholder="Tell Us How Was Your Experience" defaultValue={value} onChange={(e)=>setValue(e.target.value)}></textarea>
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