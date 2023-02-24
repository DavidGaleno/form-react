import { createContext, FormEvent, ReactNode, SetStateAction, useState } from 'react'
import { useTheme } from 'styled-components'
import { ReviewForm } from '../components/forms/ReviewForm'
import { SubmitForm } from '../components/forms/SubmitForm'
import { UserForm } from '../components/forms/UserForm'

interface IGlobalContext {
    name: string,
    setName: (newState: string) => void
    age: string,
    setAge: (newState: string) => void
    email: string,
    setEmail: (newState: string) => void
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
    submit: boolean
    setSubmit: (newState: boolean) => void
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)
GlobalContext.displayName = 'Global Context'

export const GlobalProvider = ({ children }: any) => {
    const [submit, setSubmit] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [email, setEmail] = useState<string>('')
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
            setName('')
            setAge('')
            setEmail('')
            setUsability('')
            setUtility('')
            setComment('')
        }

        setCurrentStep(step)
        setCurrentComponent(steps[Number(step)])
    }

    return (
        <GlobalContext.Provider value={{ name, setName, age, setAge, email, setEmail, usability, setUsability, utility, setUtility, comment, setComment, currentStep, currentComponent, changeStep, steps, submit, setSubmit }}>
            {children}
        </GlobalContext.Provider>
    )
}