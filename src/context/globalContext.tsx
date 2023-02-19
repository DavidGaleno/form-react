import { createContext, FormEvent, ReactNode, SetStateAction, useState } from 'react'
import { ReviewForm } from '../components/forms/ReviewForm'
import { SubmitForm } from '../components/forms/SubmitForm'
import { UserForm } from '../components/forms/UserForm'
import { useForm } from 'react-hook-form'
interface IGlobalContext {
    dataDefaultValue: any,
    setDataDefaultValue: (newState: any) => void,
    usability: string,
    setUsability: (newState: string) => void
    utility: string,
    setUtility: (newState: string) => void
    comment: string,
    setComment: (newState: string) => void
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
    const [usability, setUsability] = useState<string>('')
    const [utility, setUtility] = useState<string>('')
    const [comment, setComment] = useState<string>('')
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
        <GlobalContext.Provider value={{ dataDefaultValue, setDataDefaultValue, usability, setUsability, utility, setUtility, comment, setComment, currentStep, currentComponent, changeStep, steps, handleSubmit, register }}>
            {children}
        </GlobalContext.Provider>
    )
}