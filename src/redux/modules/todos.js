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
      // payload = 추가할 새 할일
      return {
        ...state,
        todo: [...state.todo, action.payload],
        //좌변의 todo는 state의 하위 속성이므로 state를 붙일 필요가 없다.
        // state를 풀어헤치고, 그 안의 todo라는 속성을 변경하겠다.
      };

    case DELETE_TODO:
      //payload = 삭제할 할일의 id값
      const deleteTargetId = action.payload;
      const deletedTodos = state.todo.filter(
        (item) => item.id !== deleteTargetId
      );
      return { ...state, todo: deletedTodos };

    case SWITCH_TODO:
      //payload = 상태를 변경할 id값
      const switchTargetId = action.payload;
      const switchedTodos = state.todo.map((item) => {
        if (item.id === switchTargetId) {
          return { ...item, isDone: !item.isDone };
        } else return item;
      });

      console.log("🚀 ~ todos ~ switchedTodos:", switchedTodos);
      return { ...state, todo: switchedTodos };

    default:
      return state;
  }
};

export default todos;
