import React from 'react';



export  type DisplayPropsType={
    count:number
    maxValue:number
    startValue:number
    error:string

}

const Display = (props:DisplayPropsType) => {


    return (
        <div className={"display"}>

            <h1 className={props.count === 5? "error":" " ? props.maxValue === props.count ? "error": " ": props.maxValue === props.count ? "enter values and press set":"set"}>{props.count}</h1>
            <h1 className ={props.maxValue -0? "error": "Incorrect value!" && props.startValue -0 ? "error": "Incorrect value!"}>{props.error}</h1>
            {/*<h1 className ={props.count ? "error":"enter values and press set"}>{props.error}</h1>*/}




        </div>

    );
};


export default Display;