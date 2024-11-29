import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

// 2024-11-29 Todos 배열 사용후 임포트
import cn from 'classnames'; // 조건부 스타일링을 위한 classnames 패키지 임포트

import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        {/* javascript jsx 에서의 삼항조건 연산자 */}

        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
};

// 2024-11-29 todos의 map 배열로 사용으로 인한 주석처리
// const TodoListItem = () => {
//   return (
//     <div className='TodoListItem'>
//       <div className='checkbox'>
//         <MdCheckBoxOutlineBlank />
//         <div className='text'>할일</div>
//       </div>
//       <div className='remove'>
//         <MdRemoveCircleOutline />
//       </div>
//     </div>
//   )
// };

export default TodoListItem;