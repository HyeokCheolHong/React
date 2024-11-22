// 2024-11-21 작성

import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  // value값 초기값을 0으로 설정
  // useState 리액트 Hook을 사용한 상태관리 => 배열구조 분해할당
  // value는 상태속성 현재값을 저장하고, setValue는 value값을 변경하는 setter()함수에 해당한다.

  const handleIncrease = () => {
    setValue(value + 2);
  };
  const handleDecrease = () => {
    setValue(value - 2);
  };
  const handleReset = () => {
    setValue(0);
  };
  return (
    <div>
      <p>
        현재 카운트 값 : <strong>{value}</strong> 입니다.
      </p>
      <input type="button" value="+1증가" onClick={() => setValue(value + 1)} />
      <input type="button" value="-1감소" onClick={() => setValue(value - 1)} />

      {/* 문제 button 태그를 사용해서 2씩 증가/감소 하는 카운터를 만들어 본다.
      2씩 증가하는 별도 함수 handleIncrease를 만들고 2씩 감소하는 별도 함수 handleDecrease 정의해서 구현하자 */}
      <button onClick={handleIncrease}>+2증가</button>
      <button onClick={handleDecrease}>-2감소</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  )

};

export default Counter;
