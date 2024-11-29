// 2024-11-28 TodoTemplate.js  작성내용
import { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

// 2024-11-29 react 라이브러리 추가
import { useRef, useCallback } from "react";

const App = () => {

  // 2024-11-29 todos 배열 생성
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'react 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들기',
      checked: false
    },
  ]);

  // 2024-11-29 useRef 라이브러리 사용
  const nextId = useRef(4);
  /*
   고유 값으로 사용될 ID, useRef Hook을 사용한 이유는 ID는 렌더링되는 것이 아니기 때문에
   값만 1증가 되는것은 랜더링 할 필요가 없다. 단순히 새로운 항목을 참조만 하기 때문이다.
  */
  // 배열에 새로운 항목 추가
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text, //text : text를 생략한것
      checked: false
    };
    setTodos(todos => todos.concat(todo));
    // todos 배열에 todo를  추가
    nextId.current += 1;
    // nextId.current로 ID를 1 증가
  }, []
  );
  // 컴포넌트 성능을 최적화 하기 위해서 useCallback Hook을 사용했다.
  // props로 부모 App.js에서 자식 컴포넌트인 TodoInsert로 전달되야 한다.

  // finter() 를 사용해서 배열에서 항목제거
  const onRemove = useCallback((id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
    /*
     배열에서 filter() 함수를 사용하면 콜백함수가 true를 반환하면 해당 요소는 배열에 포함되고,
     false를 반환하면 배열에서 포함되지 않는다. 즉 삭제된다.
     결국 id가 같으면 배열에서 삭제된다
    */
  }, []
  );
  // props로 부모 App.js에서 자식 컴포넌트인 TodoList로 전송되야 한다.

  // 항목수정
  const onToggle = useCallback((id) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    )
  }, []
  );



  // 2024-11-29 todos 배열 사용
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />

    </TodoTemplate>
    // TodoTemplate 태그 사이에 있는 'TodoInsert' 태그가 TodoTemplate의 children으로 작용한다.
  )

  // 2024-11-29 todos 배열 사용으로 인한 주석처리
  // return (
  //   <TodoTemplate>
  //     <TodoInsert onInsert={onInsert} />
  //     <TodoList /> 
  //   </TodoTemplate>
  //   // TodoTemplate 태그 사이에 있는 'TodoInsert' 태그가 TodoTemplate의 children으로 작용한다.
  // )
};

export default App;
