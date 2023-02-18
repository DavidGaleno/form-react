import PersonIcon from '@mui/icons-material/Person';
import RateReviewIcon from '@mui/icons-material/RateReview';
import GradeIcon from '@mui/icons-material/Grade';
import styled from 'styled-components';
 import { useEffect, useState } from 'react';
interface Props {
    currentStep: number
}

export const Steps: React.FC<Props> = ({ currentStep }: Props) => {
    //Used useState and useEffect to detect if the user device is a smartphone or PC. Based on the device's width, the screen will show 3 icons in the header or only 1.
    const [mobileIcons, setMobileIcons] = useState(false)
    useEffect(() => {
        if (screen.width < 570) {
            setMobileIcons(true)
        }
    }, [])

    return (
        <StyledContainer>
            <StyledStroke />
            <PersonIcon className='icon' style={{ backgroundColor: currentStep === 0 ? 'gray' : 'white', display: mobileIcons && currentStep !== 0 ? 'none' : 'block' }} />
            <RateReviewIcon className='icon' style={{ backgroundColor: currentStep == 1 ? 'gray' : 'white', padding: '.7rem', display: mobileIcons && currentStep !== 1 ? 'none' : 'block' }} />
            <GradeIcon className='icon' style={{ backgroundColor: currentStep === 2 ? 'gray' : 'white', display: mobileIcons && currentStep !== 2 ? 'none' : 'block' }} />
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10rem;
    margin-bottom:2rem;
    position:relative;
    .icon{
        font-size:5rem;
        border-radius: 50%;
        padding: .5rem;
    }
    @media screen and (max-width: 570px){
      gap: 5rem;
  }
    @media screen and (max-width: 570px){
      gap: 3rem;
  }

`
const StyledStroke = styled.div`
    width:92%;
    z-index: -1;
    height:.1rem;
    background-color:gray;
    position:absolute;
`
