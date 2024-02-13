"use client";
import { useReducer, useState } from "react";
import Button from "./button";
import { counterReducer } from "@/hooks/counterReducer";

type CounterProps = {};

const Counter = (props: CounterProps) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  // Event handler for incrementing and decrementing the counter
  // Separating the dispatch call into a dedicated function like this allows for better
  // organization and readability of the component code.

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="flex space-x-4">
      <Button label="+" onClick={increment} />
      <div className="text-gray-700  bg-gray-400 px-4 py-2 m-1 rounded">
        {state.count}
      </div>
      <Button label="-" onClick={decrement} />
    </div>
  );
};

export default Counter;
