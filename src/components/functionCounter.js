import React from "react";
import { useState } from "react";

function Counter(){
    const [name, setName] = useState('John');
    const [age, setAge] = useState(40)

    function nameHandler(e){
        setName(e.target.value)
    }

    function ageHandler(){
        setAge(age+1)
    }

    return (
        <>
        <input
        value={name}
        onChange={nameHandler}
        />
        <button onClick={ageHandler}>Increment age</button>
        <p>Hello {name}, You are {age} years old</p>
        </>
    )
}
export default Counter