import PersonIcon from '@mui/icons-material/Person';
import RateReviewIcon from '@mui/icons-material/RateReview';
import GradeIcon from '@mui/icons-material/Grade';
import styled from 'styled-components';
import { createTheme, withStyles } from '@mui/material';
interface Props {
    currentStep: number
}

export const Steps: React.FC<Props> = ({ currentStep }: Props, { classes }) => {
    const theme = createTheme({
        typography: {
            fontSize: 5,
        }
    })

    return (
        <StyledContainer>
            <StyledStroke />
            <PersonIcon className='icon' style={{ backgroundColor: currentStep == 0 ? 'gray' : 'white' }} />
            <RateReviewIcon className='icon' style={{ backgroundColor: currentStep == 1 ? 'gray' : 'white',padding: '.7rem' }} />
            <GradeIcon className='icon' style={{ backgroundColor: currentStep == 2 ? 'gray' : 'white' }} />
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10rem;
    position:relative;
    margin-bottom:1rem;
    .icon{
        font-size:5rem;
        border-radius: 50%;
        padding: .5rem;
    }
`
const StyledStroke = styled.div`
    width:92%;
    z-index: -1;
    height:.1rem;
    background-color:gray;
    position:absolute;
`
