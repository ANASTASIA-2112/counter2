import React from "react";


export  type ButtonPropsType={
    count:number
    inc:()=>void
    reset:()=>void
    maxValue:number
    set:()=>void
disabled:boolean




}
export function Button (props:ButtonPropsType) {


    return (
        <div>

            <input className={"superButton1"}
                   value={"inc"}
                   type={"button"}
                   onClick={props.inc}
                   disabled={props.count === props.maxValue}



            />
            <input className={"superButton2"}
                   value={"reset"}
                   type={"button"}
                   onClick={props.reset}
                   // disabled={props.count === 0}
                  />



        </div>

    );
};
export default Button;