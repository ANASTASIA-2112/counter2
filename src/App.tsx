import './App.css';

import Counter from "./Counter";
import Display from "./Display";
import Display2 from "./Display2";
import {ChangeEvent, useEffect, useState} from "react";


function App() {

  const [count, setCount] = useState(0)
  const [maxValue,setMaxValue]=useState(0)
    const [startValue,setStartValue]=useState(0)
    const [disabled,setDisabled]=useState(false)
     const [incorrectValue, setIncorrectValue] = useState<boolean>(false);
    const [error,setError]=useState("");
 useEffect(()=>{

 },[])




    useEffect(() => {
      localStorage.setItem("startValue",JSON.stringify(count))
        setStartValue(startValue)
    }, [count,startValue]);

    useEffect(() => {
        localStorage.setItem("maxValue",JSON.stringify(count))
        setMaxValue(maxValue)

    }, [count,maxValue]);


  const inc = () => {
      setCount(count +1);
      setError("enter values and press set");

  }
  const reset = () => {
      setCount(startValue);

  }



  const set =()=>{
      localStorage.setItem("value",JSON.stringify(startValue))
      localStorage.setItem("value",JSON.stringify(maxValue))
      if (maxValue <= 0 || startValue >= maxValue) {
          setDisabled(true);
           setIncorrectValue(true);
          setError("enter values and press set")
          localStorage.removeItem("maxValue");
          localStorage.removeItem("startValue");
      } else {
          setDisabled(false);
          setIncorrectValue(false);
          setError("")
          setCount(startValue);
          localStorage.setItem("maxValue",JSON.stringify(maxValue));
          localStorage.setItem("startValue", JSON.stringify(startValue));
      }

  }

    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        const value = JSON.parse(event.target.value);
        setMaxValue(value);
        if (value <= 0 || value <= startValue) {
            setDisabled(true);
            setIncorrectValue(true);
            setError("Incorrect value!")
        } else {
            setDisabled(false);
            setIncorrectValue(false);
            setError("")
        }
    }

    function handleStartValueChange(event: ChangeEvent<HTMLInputElement>) {
        const value = JSON.parse(event.target.value);
        setStartValue(value);
        if (value < 0 || value >= maxValue) {
            setDisabled(true);
            setIncorrectValue(true);
            setError("Incorrect value!")
        } else {
            setDisabled(false);
            setIncorrectValue(false);
            setError("")
        }
        setStartValue(value)
    }



            return (
                <div className={"App"}>
                    <div className={"App"}><Display count={count}
                                                    maxValue={maxValue}
                                                    startValue={startValue}
                                                    error={error}

                    /></div>
                    < Display2 startValue={startValue}
                               maxValue={maxValue}
                               set={set}
                               incorrectValue={incorrectValue}
                               count={count}
                               handleMaxValueChange={ handleMaxValueChange}
                               handleStartValueChange={handleStartValueChange}
                               disabled={disabled}






                    />
                    <Counter
                        count={count}
                        inc={inc}
                        reset={reset}
                        set={set}
                        disabled={disabled}
                        maxValue={maxValue}
                        startValue={startValue}
                    />

                </div>
            );
        }
export default App;
