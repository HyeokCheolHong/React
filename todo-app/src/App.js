// 2024-11-28 TodoTemplate.js  작성내용
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
    // TodoTemplate 태그 사이에 있는 'TodoInsert' 태그가 TodoTemplate의 children으로 작용한다.
  )
};

export default App;
