import React, {ChangeEvent} from 'react';
import SupperButton from "./SupperButton";


export  type Display2PropsType = {
    startValue: number
    maxValue: number
    set: () => void
    incorrectValue:boolean
    count:number
    handleStartValueChange:(event: ChangeEvent<HTMLInputElement>)=>void
    handleMaxValueChange:(event: ChangeEvent<HTMLInputElement>)=>void
    disabled:boolean





}


const Display2 = (props: Display2PropsType) => {
    return (
        <div className={"display"}>



            Max value:{" "}
            <input
                className={"max"}
                type="number"
                value={props.maxValue}
                style={{borderColor: props.incorrectValue ? "red" : "inherit"}}
                onChange={props.handleMaxValueChange}


            />
            <div className={"Min"}>
                Start value:{" "}
                <input
                    className={"start"}
                    type="number"
                    value={props.startValue}
                    style={{borderColor: props.incorrectValue ? "red" : "inherit"} }
                    onChange={props.handleStartValueChange}


                />
                <input className={"superButton2"}
                       value={"set"}
                       type={"button"}
                       onClick={props.set}
                       disabled={(props.startValue === props.maxValue)}

                />

            </div>
        </div>
    );
};

export default Display2;