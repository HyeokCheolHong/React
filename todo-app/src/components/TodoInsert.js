// 2024-11-29 성능 향상을 위한 userCallback Hook 사용
import { useState, useCallback } from 'react'

// 2024-11-28 react-icons 패키지 라이브러리 사용
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';


const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    // useCallback Hook을 사용해서 컴포넌트가 리랜더링 될 때마다 새로운 함수를 생성하는 것이 아니라
    // 한번 함수를 만들고 재 사용할 수 있게 하여 메모리 최적화를 시킨다. (성능향상)

    setValue(e.target.value);
    console.log(e.target.value);
  }, []);
  // 2번째 인자값으로 빈배열을 넣으면 랜더링 될 때마다 만들었던 함수가 계속해서 재사용하게 되어 메모리가 최적화

  const onSubmit = useCallback(
    /*
      onSubmit이벤트로 처리한 이유는 입력필드에서 엔터키를 눌렀을 때도 이벤트를 발생시키기 위해서 이다.
      반면 onClick은 엔터키 이벤트를 처리하기 위해서는 별도의 onKeyDown코드를 추가해야 한다.
    */
    (e) => {
      onInsert(value);
      // onInsert로 value값 전달
      setValue('');
      // 입력값 초기화
      e.preventDefault();
      // 새로고침 방지
    }, [onInsert, value], // props로 onInsert의 App.js 부모요소로 입력한 값 전달
  );


  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input value={value} onChange={onChange} placeholder='할 일을 입력하세요' />
      <button type='submit'>
        <MdAdd />
        {/* react-icon/md 에서 MdAdd 컴포넌트를 가져와서 button 태그안에 넣어줌 */}
      </button>
    </form>
  )
};

// 2024-11-19 useCallback 활용으로 인한 주석처리
// const TodoInsert = () => {
//   return (
//     <form className='TodoInsert'>
//       <input placeholder='할 일을 입력하세요' />
//       <button type='submit'>
//         <MdAdd />
//         {/* react-icon/md 에서 MdAdd 컴포넌트를 가져와서 button 태그안에 넣어줌 */}
//       </button>
//     </form>
//   )
// };

export default TodoInsert;