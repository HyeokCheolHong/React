// 2024-11-22 useReducer 사용 작성 코드

import { useReducer } from "react";

function reducer(state, action) {
  // action.type에 따라 다른 작업을 수행

  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default: // 해당 사항 없을때 기존 상태값 반환
      return state;
  }
}

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  // useReducer(Reducer함수, 상태 초기값) 함수 실행

  return (
    <div>
      <p>
        현재 카운터 값은 <strong>{state.value}</strong> 입니다.
      </p>
      <button type="button" onClick={() => { dispatch({ type: "INCREMENT" }) }}>+1</button>&nbsp;&nbsp;
      <input type="button" onClick={() => dispatch({ type: "DECREMENT" })} value="-1" />
    </div>
  )
}

export default Counter2;