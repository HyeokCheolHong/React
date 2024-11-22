// 2024-11-22 평균값 구하기 useMemo 사용하기

import { useState, useMemo } from "react";
// useMemo React Hook 사용하면 성능을 최적화 해서 사용할수 있다.
// 최적하 하는부분 : getAverage부분이 매번 호출되므로 useMemo로 캐싱하자


const getAverage = numbers => {
  console.log("평균값 계산중...");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  // reduce() 함수는 배열의 모든 요소를 순회하여 하나의 결과값(누적값)을 반환하는 함수입니다.
  // (a, b): 콜백 함수의 매개변수로, a는 누적값(Accumulator), b는 현재 요소(Current Value)입니다.
  // 배열의 첫 번째 요소가 a에 초기값으로 설정되고, 두 번째 요소가 b에 들어가서 연산을 수행합니다.
  // 그 결과는 다음 순회에서 누적값(a)으로 사용되며, 배열의 모든 요소를 순회할 때까지 반복됩니다.
  // 위 코드는 배열 요소를 모두 더한 값을 반환합니다.
  return sum / numbers.length // 평균을 반환
};

const Average2 = () => {
  const [list, setList] = useState([]);
  // 입력된 숫자를 저장할 배열. 초기값은 빈 배열로 설정됨.
  const [number, setNumber] = useState('');
  // 입력 필드의 값을 저장할 상태. 초기값은 빈 문자열.

  const onChange = (e) => {
    setNumber(e.target.value);
    // 입력 필드의 값을 실시간으로 가져와 setNumber로 인해 number 상태에 저장합니다.
  };

  const onInsert = (e) => {
    const parsedNumber = parseInt(number);
    // 입력 필드의 값을 정수로 변환. 숫자가 아닌 경우 NaN 반환.

    // 숫자가 아닌 경우 처리
    if (isNaN(parsedNumber)) {
      alert("숫자를 입력해주세요!"); // 경고 메시지 표시
      setNumber(''); // 입력 필드 초기화
      return; // 함수 종료
    }

    const nextList = list.concat(parsedNumber);
    // number(입력필드 value)값을 정수값으로 가져와 list 배열의 추가하여 새로운 배열(nextList)을 생성함
    setList(nextList);
    // concat으로 추가된 배열을 setList로 list배열에 추가함
    setNumber('');
    // number상태 속성값이 초기화 (즉 입력필드 값이 초기화)
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onInsert();
    }
  };

  const avg = useMemo(() => getAverage(list), [list]); // 성능 최적화

  return (
    <div>
      평균을 구할 정수 숫자 입력 (Average2 컴포넌트) :
      <input name="number" id="number" value={number} size="14" onChange={onChange} onKeyDown={onKeyPress} />&nbsp;
      <button value="추가" onClick={onInsert} >추가</button><hr />

      <ul>
        {list.map((value, index) => (
          <li key={index} >{value}</li>
        ))
        }
      </ul>
      <div>
        평균값 : <strong>{avg}</strong>

      </div>
    </div>
  )
};

export default Average2;