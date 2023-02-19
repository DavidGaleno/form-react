import { createContext, FormEvent, ReactNode, SetStateAction, useState } from 'react'
import { ReviewForm } from '../components/forms/ReviewForm'
import { SubmitForm } from '../components/forms/SubmitForm'
import { UserForm } from '../components/forms/UserForm'
import { useForm } from 'react-hook-form'
interface IGlobalContext {
    dataDefaultValue: any,
    setDataDefaultValue: (newState: any) => void,
    steps: JSX.Element[],
    currentStep: number,
    currentComponent: JSX.Element,
    changeStep: (step: SetStateAction<number>, end: Boolean, e?: FormEvent) => void
    register: any
    handleSubmit: any
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)
GlobalContext.displayName = 'Global Context'

export const GlobalProvider = ({ children }: any) => {
    const [dataDefaultValue, setDataDefaultValue] = useState<any>({})
    const { register, handleSubmit, reset } = useForm()
    const steps = [<UserForm />, <ReviewForm />, <SubmitForm />]
    const [currentStep, setCurrentStep] = useState(0)
    const [currentComponent, setCurrentComponent] = useState(steps[currentStep])
    const changeStep = (step: SetStateAction<number>, end: Boolean, e?: FormEvent) => {
        if (e) e.preventDefault()
        if (step < 0 || step >= steps.length) return
        if (end) {
            setDataDefaultValue({})
            reset({})
            
        }

        setCurrentStep(step)
        setCurrentComponent(steps[Number(step)])
    }

    return (
        <GlobalContext.Provider value={{ dataDefaultValue, setDataDefaultValue, currentStep, currentComponent, changeStep, steps, handleSubmit, register }}>
            {children}
        </GlobalContext.Provider>
    )
}