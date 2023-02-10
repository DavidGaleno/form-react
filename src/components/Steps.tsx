import PersonIcon from '@mui/icons-material/Person';
import RateReviewIcon from '@mui/icons-material/RateReview';
import GradeIcon from '@mui/icons-material/Grade';
import styled from 'styled-components';
interface Props {
    currentStep: number
}

export const Steps: React.FC<Props> = ({ currentStep }: Props) => {
    return (
        <StyledContainer>
            <StyledStroke />
            <PersonIcon style={{ fontSize: '5rem', backgroundColor: currentStep == 0 ? 'purple' : 'white', borderRadius: '50%',padding:'.5rem' }} />
            <RateReviewIcon style={{ fontSize: '5rem', backgroundColor: currentStep == 1 ? 'purple' : 'white', borderRadius: '50%',padding:'.5rem' }} />
            <GradeIcon style={{ fontSize: '5rem', backgroundColor: currentStep == 2 ? 'purple' : 'white', borderRadius: '50%',padding:'.5rem' }} />
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10rem;
    position:relative;
`
const StyledStroke = styled.div`
    width:92%;
    z-index: -1;
    height:.1rem;
    background-color:purple;
    position:absolute;
`