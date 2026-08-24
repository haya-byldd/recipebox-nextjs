import {IconType} from "react-icons";

type InputFormProps = {
    icon:IconType;
    type:string;
    placeHolder:string;
    label: string



}

const InputForm = ({icon:Icon, type,placeHolder,label}:InputFormProps) => {
    return(
        <div className="relative">
            <Icon className ="absolulte left-4 top-1/2 -translate-y-1/2 text-text-muted"/>
            <input type={type} placeholder={placeHolder} aria-label={label} className="input-field" />

        </div>
    )
}

export default InputForm;