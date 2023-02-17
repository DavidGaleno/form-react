import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/globalContext";
import { ReviewInput } from "./ReviewInput";
import { TextArea } from "./TextArea";
export const ReviewForm: React.FC = () => {
    const {usability,setUsability,utility,setUtility,comment,setComment} = useContext(GlobalContext)

    return (
         <StyledContainer>
            <ReviewInput value={usability} setValue={setUsability} label={"Usability"}/>
            <ReviewInput value={utility} setValue={setUtility} label={"Utility"}/>
            <TextArea value={comment} setValue={setComment}/>
         </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width:100%;
    overflow-y: scroll;
    display:flex;
    flex-direction:column;
    gap: 3rem;
`