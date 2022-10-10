import { PropsWithChildren } from "react";
import styles from './input.module.scss'

const InputField = (props) => {


    return (
        <div>
            <label>{props.label}</label>
            <input {...props} className={styles.input} />
        </div>
    )
}

export default InputField;