import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">

      {/* 2024-11-29 todos map배열로 사용 */}
      {/* todos배열을 map()함수로 TodoListItem으로 이루어진 배열로 변환해서 랜더링한다. */}
      {/* todo 데이터는 todo={todo}라는 형태로 props를 사용하여 자식컴포넌트인 TodoListItem으로 전달한다 */}
      {/* map()함수를 사용하기 위해서는 고유한 키값(id)을 정의해야 한다 */}
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};

// 2024-11-29 todos의 map 배열로 사용으로 인한 주석처리
// const TodoList = () => {
//   return (
//     <div className="TodoList">

//       <TodoListItem />
//       <TodoListItem />
//       <TodoListItem />
//     </div>
//   );
// };

export default TodoList;
