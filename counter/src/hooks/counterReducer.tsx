// Using useReducer instead of useState here because it provides a more structured approach
// for managing state, especially when the state logic becomes more complex or involves
// multiple related state values. This can improve code readability and maintainability
// by separating the state update logic into a reducer function

type CounterState = {
  count: number;
};

// Define the type for the action
type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" };

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
