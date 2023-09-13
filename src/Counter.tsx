import React from 'react';
import {Button} from "./SupperButton";


export type PropsType = {
    count: number
    inc: () => void
    reset: () => void

    set: () => void
    maxValue: number
    startValue: number
    disabled: boolean


}


const Counter = (props: PropsType) => {

    return (
        <div className={"Counter"}>
            <Button
                reset={props.reset}
                inc={props.inc}
                count={props.count}
                set={props.set}
                disabled={props.count === 5}
                maxValue={props.maxValue}


            />

        </div>
    );
};

export default Counter;