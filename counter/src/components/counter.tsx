'use client';
import { useState } from "react"
import Button from "./button";

type CounterProps = {

}

const Counter =(props:CounterProps)=>{
    const [counter , setCounter] = useState<number>(0)

    return(
        <div className="flex">
            <Button 
            className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded"} 
            label="+"
            onClick={()=>setCounter((prev)=>prev +1)}
            />
            <div className="text-gray-700  bg-gray-400 px-4 py-2 m-1 rounded">{counter}</div>
            <Button 
            className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded"} 
            label="-"
            onClick={()=>setCounter((prev)=>prev -1)}
            />
        </div>
    )
}

export default Counter;