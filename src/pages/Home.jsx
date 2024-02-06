import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";
import shortid from "shortid";
// {/* - Input 영역 : input 태그 2개, 제출버튼 1개
// - TodoList 영역 : todos 중 isDone 항목이 false인 개수만큼 Todo 박스 생성. 각 Todo 박스는 제목 텍스트, 내용 텍스트, [완료]버튼, [삭제], [상세보기] 버튼이 표시됨.
// - DoneList 영역 : todos 중 isDone 항목이 true인 개수만큼 Todo 박스 생성. 각 Todo 박스는 제목 텍스트, 내용 텍스트, [취소]버튼, [삭제], [상세보기] 버튼이 표시됨.
// - TodoList 영역과 DoneList 영역은 하나의 컴포넌트를 재활용 하되, **`isActive`** props를 만들어 이용하여 작성
// - [완료] 버튼을 누르면 ‘DoneList’로, [취소] 버튼을 누르면 ‘TodoList’로 이동시킴
// - [상세보기] 버튼을 누르면 todo item 하나의 상세정보가 보여지는 화면(Detail.jsx)으로 이동 */}

const StTodoBox = styled.div`
  width: 200px;
  height: 100px;
  border: 1px solid green;
  margin: 10px;
`

const Home = () => {

  const dispatch = useDispatch();
  const todoListData = useSelector((state) => {
    return state.todos.todo
  })
  console.log("🚀 ~ todoListData ~ todoListData:", todoListData)

  const handleSubmitButtonClick = () => {
    //dispatch로 값 넘겨주기
    const newTodo = {
      id: shortid.generate(),
      title,
      body: todo,
      isDone: false
    }
    dispatch(addTodo(newTodo))

  }

  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  }

  const handleDoneButtonClick = () => {

  }

  return (<div>home
    <header>
      <h1>Redux로 TodoList 만들기</h1>
    </header>
    <main>
      제목 : <input value={title} onChange={handleTitleChange} /> 할일 : <input value={todo} onChange={handleTodoChange} /> <button onClick={handleSubmitButtonClick}> 제출 </button >
      <hr></hr>
      {todoListData.map((item) => {
        return (
          <StTodoBox>
            {item.title} {item.body}
            <br></br>
            <button onClick={() => handleDoneButtonClick(item.id)}>완료</button>
            <button>삭제</button>
          </StTodoBox>
        )

      })}
    </main>
    <footer>푸터 영역입니다.</footer>
  </div>
  )
};

export default Home;
