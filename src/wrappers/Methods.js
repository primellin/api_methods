import { useState } from "react";
import { PagingButtonLeft, PagingButtonRight } from "../atomic_components";
import { EncodeBase64 } from "../methods/EncodeBase64.js";
import { GetRoles } from "../methods/GetRoles.js";
import { GetCode } from "../methods/GetCode.js";
import { SetStatus } from "../methods/SetStatus.js";
import { SignUp } from "../methods/SignUp.js";

export function Methods() {
    const [methodNumber, setMethodNumber] = useState(1);
    
    let pagingForwardHandler = async () => {
        if (methodNumber === 5) {
            setMethodNumber(1);
        } else {
            setMethodNumber(methodNumber + 1);
        }
    }

    let pagingBackwardHandler = async () => {
        if (methodNumber === 1) {
            setMethodNumber(5);
        } else {
            setMethodNumber(methodNumber - 1);
        }
    }

    function Method(){
        switch(methodNumber){
            case 1:
                return <GetRoles />;
            case 2:
                return <SignUp />;
            case 3:
                return <GetCode />;
            case 4:
                return <EncodeBase64 />;
            case 5:
                return <SetStatus />;
            default:
                return <GetRoles />;
        }
    }

    return (
        <div className="methods-wrapper methods">
            <PagingButtonLeft text="<" onClickHandler={pagingBackwardHandler} />
            <Method />
            <PagingButtonRight text=">" onClickHandler={pagingForwardHandler} />
        </div>
    );
}