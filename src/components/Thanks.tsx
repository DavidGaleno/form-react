import { useContext } from "react"
import styled from "styled-components"
import { GlobalContext } from "../context/globalContext"
import { icons } from "./icons"
export const Thanks: React.FC = () => {
    const {name,age,email,usability,utility,comment} = useContext(GlobalContext)
    return (
        <StyledContainer>
            <StyledButton type="submit">SUBMIT</StyledButton>
            <h3>Here an resume of your answers</h3>
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
                    <p className="comment">{comment.length > 60 ? `${comment.substring(0,60)}` : comment}</p>
                    </div>
                    <p className="comment">{comment.length > 140 ? `${comment.substring(61,140)}...` : comment}</p>
                    </Box>
                }
            </Resume>
            <h4>Submit and get a 10% discount cupom</h4>
        </StyledContainer>
    )
}
const StyledContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-evenly;
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
`
const Resume = styled.div`
    width:100%;
    max-height: 20rem;
    overflow-y:scroll;
    display:flex;   
    flex-direction:column;
    gap: 2rem;   
    .comment-box{
        display:flex;
        align-items:flex-start;
        justify-content:center;
        flex-wrap: wrap;
        flex-direction: column;
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
    .icon{
        font-size:3rem;
    }
    .comment{
        font-size:1.3rem;
    }
`