import styled from "styled-components"
import { RadioBox } from "./RadioBox"
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import TagFacesIcon from '@mui/icons-material/TagFaces';



interface Props {
    label: string
    value: any
    setValue: any
}

export const ReviewInput: React.FC<Props> = ({ label, value, setValue }: Props) => {
    return (
        <StyledInputContainer>
            <h2>{label}</h2>
            <StyledRadioBoxContainer>
                <RadioBox value={value} setValue={setValue} label={label} id="0" />
                <RadioBox value={value} setValue={setValue} label={label} id="1" />
                <RadioBox value={value} setValue={setValue} label={label} id="2" />
                <RadioBox value={value} setValue={setValue} label={label} id="3" />
                <RadioBox value={value} setValue={setValue} label={label} id="4" />
            </StyledRadioBoxContainer>
        </StyledInputContainer>
    )
}


const StyledInputContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap: 1rem;
    h2{
        font-size:2rem;
        font-weight:300;
    }
`
const StyledRadioBoxContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 3rem;
`