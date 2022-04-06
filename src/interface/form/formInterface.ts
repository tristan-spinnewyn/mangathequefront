export interface InputInterface{
    type: string
    label:string
    placeholder: string
    value: string
    change: React.EventHandler<MyFormEvent<HTMLInputElement>>
    name: string
    divClass?: string
    inputClass?: string
}

export interface ButtonTopRegLog{
    isConnexion?: boolean
    isRegister?: boolean
}
interface MyEventTarget extends EventTarget {
    value: string
}

interface MyFormEvent<T> extends React.FormEvent<T> {
    target: MyEventTarget
}

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    onChange?: React.EventHandler<MyFormEvent<HTMLInputElement>>;
}