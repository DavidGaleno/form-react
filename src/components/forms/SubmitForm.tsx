import { useContext } from "react"
import styled from "styled-components"
import { GlobalContext } from "../../context/globalContext"
import { icons } from "../icons/icons"
export const SubmitForm: React.FC = () => {
    const { usability, utility, comment, dataDefaultValue } = useContext(GlobalContext)
    return (
        <StyledContainer>
            <h3>Here an resume of your answers</h3>
            <h4>Submit and get a 10% discount cupom</h4>
            <StyledButton type="submit">SUBMIT</StyledButton>
            <Resume>
                {Object.keys(dataDefaultValue).map(key => (
                    dataDefaultValue[key].type === 'textarea' ?
                        <Box className="comment-box">
                            <div className="first-section">
                                <label htmlFor="comment">{String(key)}</label>
                                <p className="comment">{dataDefaultValue["Comments"].value.length > 60 ? `${dataDefaultValue["Comments"].value.substring(0, 60)}` : dataDefaultValue["Comments"].value}</p>
                            </div>
                            <div className="last-section">
                                <p className="comment">{dataDefaultValue["Comments"].value.length > 140 && dataDefaultValue["Comments"].value.substring(61)}</p>
                            </div>
                        </Box>
                        :
                        <Box>
                            <label htmlFor={String(key)}>{String(key)}</label>
                            {dataDefaultValue[key].type === 'radio' ? <p>{icons[Number(dataDefaultValue[key].value)]}</p> : <p className="text">{dataDefaultValue[key].value}</p>
                            }
                        </Box>
                ))}

            </Resume>
        </StyledContainer>
    )
}
const StyledContainer = styled.div`
    width:100%;
    display:flex;
    gap: 2rem;
    align-items:center;
    flex-direction:column;
    h3{
        color:gray;
        font-size:2.5rem;
        font-weight:300;
    }
    h4{
        color:gray;
        font-size:2rem;
    }
    @media screen and (max-height: 564px){
        justify-content:flex-start;
    }
    
`
const Resume = styled.div`
    width:100%;
    max-height: 23rem;
    overflow-y:scroll;
    display:flex;   
    flex-direction:column;
    gap: 2rem;   
    .comment-box{
        display:block !important;
        .comment{
            word-wrap: break-word;
        }
    }
    @media screen and (max-height: 564px){
      overflow-y: visible;
      max-height:fit-content;
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
const Box = styled.div`
    font-size:2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    padding:0 1.8rem;
    width:100%;
    .first-section{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
    }
    .last-section{
        display:block;
    }
    .icon{
        font-size:3rem;
    }
    .comment{
        font-size:1.3rem;
        line-height:2rem;
    }
`