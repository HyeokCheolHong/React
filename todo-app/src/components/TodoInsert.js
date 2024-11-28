// 2024-11-28 react-icons 패키지 라이브러리 사용
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className='TodoInsert'>
      <input placeholder='할 일을 입력하세요' />
      <button type='submit'>
        <MdAdd />
        {/* react-icon/md 에서 MdAdd 컴포넌트를 가져와서 button 태그안에 넣어줌 */}
      </button>
    </form>
  )
};

export default TodoInsert;