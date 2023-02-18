import { useContext } from "react"
import styled from "styled-components"
import { GlobalContext } from "../../context/globalContext"
import { icons } from "../icons/icons"
export const SubmitForm: React.FC = () => {
    const { name, age, email, usability, utility, comment } = useContext(GlobalContext)
    return (
        <StyledContainer>
            <h3>Here an resume of your answers</h3>
            <h4>Submit and get a 10% discount cupom</h4>
            <StyledButton type="submit">SUBMIT</StyledButton>
            <Resume>
                <Box>
                    <label htmlFor="name">Name:</label>
                    <p className="text">{name}</p>
                </Box>
                <Box>
                    <label htmlFor="name">Age:</label>
                    <p className="text">{age}</p>
                </Box>
                <Box>
                    <label htmlFor="name">Email:</label>
                    <p className="text">{email}</p>
                </Box>
                <Box>
                    <label htmlFor="usability">Usability:</label>
                    <p>{icons[usability]}</p>
                </Box>
                <Box>
                    <label htmlFor="utility">Utility:</label>
                    <p>{icons[utility]}</p>
                </Box>


                {comment &&
                    <Box className="comment-box">
                        <div className="first-section">
                            <label htmlFor="comment">Comments:</label>
                            <p className="comment">{comment.length > 60 ? `${comment.substring(0, 60)}` : comment}</p>
                        </div>
                        <div className="last-section">
                            <p className="comment">{comment.length > 140 ? `${comment.substring(61)}` : comment}</p>
                        </div>
                    </Box>
                }
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