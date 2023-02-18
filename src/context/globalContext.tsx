import { createContext, ReactNode, SetStateAction, useState } from 'react'
import { useTheme } from 'styled-components'
import { ReviewForm } from '../components/forms/ReviewForm'
import { SubmitForm } from '../components/forms/SubmitForm'
import { UserForm } from '../components/forms/UserForm'

export const GlobalContext = createContext<any | null>(null)
GlobalContext.displayName = 'Global Context'

export const GlobalProvider = ({ children }: any) => {
    const [name, setName] = useState<string>()
    const [age, setAge] = useState<number>()
    const [email, setEmail] = useState<string>()
    const [usability, setUsability] = useState<string>()
    const [utility, setUtility] = useState<string>()
    const [comment, setComment] = useState<string>()
    const steps = [<UserForm />, <ReviewForm />, <SubmitForm />]
    const [currentStep, setCurrentStep] = useState(0)
    const [currentComponent, setCurrentComponent] = useState(steps[currentStep])
    const changeStep = (step: SetStateAction<number>, end: Boolean,e : Event) => {
        if (e) e.preventDefault()
        if (step < 0 || step >= steps.length) return
        if (end) {
            setName(undefined)
            setAge(undefined)
            setEmail(undefined)
            setUsability(undefined)
            setUtility(undefined)
            setComment(undefined)
        }
        
        setCurrentStep(step)
        setCurrentComponent(steps[Number(step)])
    }

    return (
        <GlobalContext.Provider value={{ name, setName, age, setAge, email, setEmail, usability, setUsability, utility, setUtility, comment, setComment, currentStep, currentComponent, changeStep, steps }}>
            {children}
        </GlobalContext.Provider>
    )
}