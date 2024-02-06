// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

const initialState = {
  todo: [
    {
      id: shortid.generate(),
      title: "3",
      body: "3",
      isDone: false,
    },
  ],
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    // case "DELETE_TODO":
    //   return; //TODO: 여기 작성

    // case "SWITCH_TODO":
    //   return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
