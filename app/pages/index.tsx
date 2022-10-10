
import { useState } from "react";
import InputField from "../components/Form/Input/input";

const IndexPage = () => {

    return (
        <div>
            <InputField label="Input" onChange={(e) => {
                console.log(e.target.value)
            }} />
        </div>
    )
}

export default IndexPage;