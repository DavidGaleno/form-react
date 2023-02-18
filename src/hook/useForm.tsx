import { SetStateAction, useState } from "react"

interface Props {
    steps: Number
}

export const useForm: Function = (steps: Array<JSX.Element>) => {
    const [currentStep, setCurrentStep] = useState(0)
    const changeStep = (step: SetStateAction<number>, event: Event) => {
        if(event) event.preventDefault()
        if(step < 0 || step >= steps.length) return
        
        setCurrentStep(step)
    }
    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep
    }
}