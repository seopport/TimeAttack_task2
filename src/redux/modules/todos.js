// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

const initialState = {
  todo: [
    {
      id: shortid.generate(),
      title: "",
      body: "",
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
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
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

    case DELETE_TODO:
      const deleteTargetId = action.payload;
      const deleteFilteredList = state.todo.filter(
        (item) => item.id !== deleteTargetId
      );
      return {
        ...state,
        todo: deleteFilteredList, //TODO: 여기 작성
      };

    case SWITCH_TODO:
      const switchedList = state.todo.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        } else return item;
      });

      return {
        ...state,
        todo: switchedList,
      };

    default:
      return state;
  }
};

export default todos;
